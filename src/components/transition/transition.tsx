import React, {
  useContext,
  useRef,
  type ReactNode,
  useEffect,
  useState,
} from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import TransitionContext from "./transitionContext";

type TransitionComponentProps = {
  children: ReactNode;
};

const TransitionComponent: React.FC<TransitionComponentProps> = ({
  children,
}) => {
  const location = useLocation();
  const { toggleCompleted } = useContext(TransitionContext);
  const nodeRef = useRef<HTMLDivElement>(null);

  const [initialLoaded, setInitialLoaded] = useState(false);

  useEffect(() => {
    if (!initialLoaded && nodeRef.current) {
      gsap.fromTo(
        nodeRef.current,
        { autoAlpha: 0, y: 30, scale: 0.95 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out" }
      );
      setInitialLoaded(true);
    }
  }, [initialLoaded]);

  return (
    <SwitchTransition mode="out-in">
      <Transition
        key={location.pathname}
        timeout={500}
        nodeRef={nodeRef}
        onEnter={() => {
          const node = nodeRef.current!;
          toggleCompleted(false);
          gsap.set(node, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
          gsap
            .timeline({ paused: true, onComplete: () => toggleCompleted(true) })
            .to(node, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
            .to(node, { scale: 1, duration: 0.25 })
            .play();
        }}
        onExit={() => {
          const node = nodeRef.current!;
          gsap
            .timeline({ paused: true })
            .to(node, { scale: 0.8, duration: 0.2 })
            .to(node, { xPercent: 100, autoAlpha: 0, duration: 0.2 })
            .play();
        }}
      >
        <div ref={nodeRef}>{children}</div>
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;
