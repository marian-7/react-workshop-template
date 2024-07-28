import { Beginner } from '@/components/beginner/Beginner';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/beginner')({
  component: BeginnerPage,
});

function BeginnerPage() {
  return (
    <div className="p-2">
      <Beginner />
    </div>
  );
}
