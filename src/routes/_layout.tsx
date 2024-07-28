import { NavBar } from '@/components/menu/NavBar';
import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex gap-2 justify-center mt-3">
        <NavBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
