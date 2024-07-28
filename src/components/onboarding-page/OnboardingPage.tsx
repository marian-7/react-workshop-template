import { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export const OnboardingPage = (props: Props) => {
  const { title, children } = useOnboardingPage(props);

  return (
    <div className="flex flex-col gap-2 items-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </div>
  );
};

function useOnboardingPage(props: Props) {
  const { title, children } = props;

  return {
    title,
    children,
  };
}
