// src/components/common/LottieAnimation.tsx
"use client"; // This component needs to be a Client Component

import React from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react'; // Import Lottie and its types
// Define props for your LottieAnimation component
interface LottieAnimationProps {
  animationData: object; // The imported JSON animation data
  loop?: boolean; // Whether the animation should loop (default: true)
  autoplay?: boolean; // Whether the animation should autoplay (default: true)
  style?: React.CSSProperties; // Optional inline styles for the container
  className?: string; // Optional CSS class for the container
  rendererSettings?: {
    preserveAspectRatio?: string; // e.g., 'xMidYMid slice'
  };

}

const LottieAnimation = ({
  animationData,
  loop = true,
  autoplay = true,
  style,
  className,
  rendererSettings,
}: LottieAnimationProps) => {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={style}
      className={className}
      rendererSettings={rendererSettings}
    />
  );
};

export default LottieAnimation;