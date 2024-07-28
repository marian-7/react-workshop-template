import { Intermediate } from '@/components/intermediate/Intermediate';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/intermediate')({
  component: IntermediatePage,
});

function IntermediatePage() {
  return (
    <div className="p-2">
      <Intermediate />
    </div>
  );
}
