import "./globals.css";
import {Header} from "@/app/components/Header/Header";
import {Aside} from "@/app/components/Aside/Aside";
import i18nConfig from "@/i18nConfig";
import TranslationsProvider from "@/app/components/TranslationProvider";
import initTranslations from "@/app/i18n";
import {dir} from 'i18next'



export const metadata = {
  title: "Сhallengermode tournaments",
  description: "Tournaments by Challengermode",
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout({ children, params }) {
  const i18nNamespaces = ['home', 'sub', 'components', 'profile'];
  const locale = (await params).locale;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <html lang={locale} dir={dir(locale)}>
        <body>
          <Header />
          <Aside />
          {children}
        </body>
      </html>
    </TranslationsProvider>
  );
}
