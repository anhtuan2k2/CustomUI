import I18n from 'react-native-i18n';

import Locales from '@constants/locales';
import Lodash from 'lodash';

I18n.fallbacks = true;
I18n.translations = Locales;

// I18n.locale = "nl"; // force Locale

export function strings(name: string, params = {}) {
  const newParams = Lodash.isEmpty(params) ? '' : params;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return I18n.t(name, newParams);
}

export function setLocale(locale: string) {
  I18n.locale = locale;
}

export const currentLocale = I18n.currentLocale();
