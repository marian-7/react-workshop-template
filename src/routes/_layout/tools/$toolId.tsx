import { OnboardingPage } from '@/components/onboarding-page/OnboardingPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/tools/$toolId')({
  component: ToolsPage,
});

function ToolsPage() {
  return <OnboardingPage title="">Placeholder</OnboardingPage>;
}
