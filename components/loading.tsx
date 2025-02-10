import { AnimatedLoadingText } from "./animated-loading-text";

export const Loading = () => {
  return (
    <div className="flex justify-center mt-32">
      <AnimatedLoadingText
        className="text-xl font-light"
        message="Loading..."
      />
    </div>
  );
};
