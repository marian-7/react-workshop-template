import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/about')({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      <h3>Welcome About!</h3>
      <Button>Click me</Button>
    </div>
  );
}
