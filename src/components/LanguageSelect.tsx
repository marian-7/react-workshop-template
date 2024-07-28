import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Language = {
  name: string;
  flagUrl: string;
  code: string;
};

const LANGUAGE: Record<string, Language> = {
  en: {
    name: 'English',
    flagUrl: 'https://flagsapi.com/US/flat/64.png',
    code: 'en',
  },
  de: {
    name: 'Deutsch',
    flagUrl: 'https://flagsapi.com/DE/flat/64.png',
    code: 'de',
  },
  hr: {
    name: 'Hrvatski',
    flagUrl: 'https://flagsapi.com/HR/flat/64.png',
    code: 'hr',
  },
};

export const LanguageSelect = () => {
  const { t, onChangeLanguage } = useLanguageSelect();

  const LanguageOption = (lng: Language) => (
    <SelectItem value={lng.code}>
      <div className="flex justify-between items-center">
        <Avatar>
          <AvatarImage
            src={lng.flagUrl}
            alt={lng.name}
            className="object-cover"
          />
          <AvatarFallback>{lng.code.toUpperCase()}</AvatarFallback>
        </Avatar>
        <span className="ml-2">{lng.name}</span>
      </div>
    </SelectItem>
  );

  return (
    <Select onValueChange={onChangeLanguage}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={t('settings.changeLanguage')} />
      </SelectTrigger>
      <SelectContent>
        {Object.values(LANGUAGE).map(LanguageOption)}
      </SelectContent>
    </Select>
  );
};

function useLanguageSelect() {
  const { t, i18n } = useTranslation();

  const onChangeLanguage = (lng: string) => {
    if (Object.keys(LANGUAGE).includes(lng)) {
      i18n.changeLanguage(lng);
    }
  };

  return {
    t,
    onChangeLanguage,
  };
}
