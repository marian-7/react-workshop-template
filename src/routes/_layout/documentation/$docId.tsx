import { OnboardingPage } from '@/components/onboarding-page/OnboardingPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/documentation/$docId')({
  component: DocumentationPage,
});

function DocumentationPage() {
  return <OnboardingPage title="">Placeholder</OnboardingPage>;
}
