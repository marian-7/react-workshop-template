import { createFileRoute } from '@tanstack/react-router';

import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/_layout/')({
  component: Home,
});

function Home() {
  const { t } = useHome();

  return (
    <div className="p-2">
      <h2>{t('home.title')}</h2>
      <p>{t('home.description')}</p>
    </div>
  );
}

function useHome() {
  const { t } = useTranslation();

  return {
    t,
  };
}
