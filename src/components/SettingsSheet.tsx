import { LanguageSelect } from '@/components/LanguageSelect';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { GearIcon } from '@radix-ui/react-icons';
import { useTranslation } from 'react-i18next';

export const SettingsSheet = () => {
  const { t } = useSettingsSheet();

  return (
    <Sheet>
      <SheetTrigger>
        <GearIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{t('settings.title')}</SheetTitle>
          <SheetDescription>{t('settings.description')}</SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 mt-4">
          <LanguageSelect />
        </div>
      </SheetContent>
    </Sheet>
  );
};

function useSettingsSheet() {
  const { t } = useTranslation();

  return {
    t,
  };
}
