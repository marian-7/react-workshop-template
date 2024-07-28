import { OnboardingPage } from '@/components/onboarding-page/OnboardingPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/hardware/')({
  component: HardwarePage,
});

function HardwarePage() {
  return <OnboardingPage title="Hardware">HardwarePage</OnboardingPage>;
}
