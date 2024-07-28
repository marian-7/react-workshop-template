import { OnboardingPage } from '@/components/onboarding-page/OnboardingPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/intro/$introId')({
  component: IntroPage,
});

function IntroPage() {
  return <OnboardingPage title="">Placeholder</OnboardingPage>;
}
