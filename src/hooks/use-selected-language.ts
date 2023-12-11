import { useCallback } from 'react';
import { useMMKVString } from 'react-native-mmkv';

import { changeLanguage, LOCAL } from '@/i18n';
import type { Language } from '@/i18n/resources';

export const useSelectedLanguage = () => {
  const [language, setLang] = useMMKVString(LOCAL);

  const setLanguage = useCallback(
    (lang: Language) => {
      setLang(lang);
      if (lang !== undefined) changeLanguage(lang as Language);
    },
    [setLang]
  );

  return { language: language as Language, setLanguage };
};
