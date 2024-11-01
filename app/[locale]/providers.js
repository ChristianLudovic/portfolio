import { I18nProviderClient } from "@/locales/client";

export function Providers({ children, locale }) {
    return (
      <I18nProviderClient locale={locale}>
        {children}
      </I18nProviderClient>
    )
  }