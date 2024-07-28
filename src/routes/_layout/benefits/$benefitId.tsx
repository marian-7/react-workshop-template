import { OnboardingPage } from '@/components/onboarding-page/OnboardingPage';
import { BENEFIT_OPTIONS } from '@/mock/linkOptions';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/benefits/$benefitId')({
  loader: ({ params: { benefitId } }) => {
    const benefit = BENEFIT_OPTIONS.find((b) => b.id === benefitId);

    if (!benefit) {
      throw redirect({ to: '/' });
    }
    return benefit;
  },
  component: BenefitPage,
});

function BenefitPage() {
  const benefit = Route.useLoaderData();

  return (
    <OnboardingPage title={benefit.title}>{benefit.description}</OnboardingPage>
  );
}
