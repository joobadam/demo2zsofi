'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function PrivacyPolicyPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            {t('privacyPolicy.title')}
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {t('privacyPolicy.cookiePolicy')}
              </h2>
              <p className="text-gray-600 mb-4">
                {t('privacyPolicy.cookiePolicyDescription')}
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {t('privacyPolicy.whatAreCookies')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('privacyPolicy.whatAreCookiesDescription')}
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {t('privacyPolicy.typesOfCookies')}
              </h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-800">{t('privacyPolicy.necessaryCookies')}</h4>
                  <p className="text-gray-600 text-sm">
                    {t('privacyPolicy.necessaryCookiesDescription')}
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-800">{t('privacyPolicy.analyticsCookies')}</h4>
                  <p className="text-gray-600 text-sm">
                    {t('privacyPolicy.analyticsCookiesDescription')}
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-800">{t('privacyPolicy.marketingCookies')}</h4>
                  <p className="text-gray-600 text-sm">
                    {t('privacyPolicy.marketingCookiesDescription')}
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-800">{t('privacyPolicy.preferenceCookies')}</h4>
                  <p className="text-gray-600 text-sm">
                    {t('privacyPolicy.preferenceCookiesDescription')}
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {t('privacyPolicy.managingPreferences')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('privacyPolicy.managingPreferencesDescription')}
              </p>
              <p className="text-gray-600 mb-4">
                {t('privacyPolicy.toChangePreferences')}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>{t('privacyPolicy.useCookieManager')}</li>
                <li>{t('privacyPolicy.clearBrowserCookies')}</li>
                <li>{t('privacyPolicy.adjustBrowserSettings')}</li>
                <li>{t('privacyPolicy.contactForAssistance')}</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {t('privacyPolicy.thirdPartyCookies')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('privacyPolicy.thirdPartyCookiesDescription')}
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {t('privacyPolicy.dataProtection')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('privacyPolicy.dataProtectionDescription')}
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {t('privacyPolicy.updatesToPolicy')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('privacyPolicy.updatesToPolicyDescription')}
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {t('privacyPolicy.contactUs')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('privacyPolicy.contactUsDescription')}
              </p>
            </section>

            <div className="bg-gray-50 rounded-lg p-6 mt-8">
              <p className="text-sm text-gray-500 text-center">
                {t('privacyPolicy.lastUpdated')}: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
