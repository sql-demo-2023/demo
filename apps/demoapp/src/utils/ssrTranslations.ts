import { UserConfig } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import nextI18NextConfig from '../../next-i18next.config';

/**
 * ssr translations with default config
 * @param locale
 * @param namespacesRequired
 * @param configOverride
 * @param extraLocales
 */
export const ssrTranslations = async (
  locale: string,
  namespacesRequired?: string[] | undefined,
  configOverride?: UserConfig | null,
  extraLocales: string[] | false = ['fr-FR', 'es-ES']
) =>
  serverSideTranslations(
    locale,
    namespacesRequired,
    nextI18NextConfig ?? configOverride,
    extraLocales
  );
export default ssrTranslations;
