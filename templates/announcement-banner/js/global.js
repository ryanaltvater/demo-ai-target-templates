// Global activity scripts go here
import('@rhds/elements/rh-cta/rh-cta.js')
import('@rhds/elements/rh-surface/rh-surface.js')

let langElem = document.querySelector('html').lang;
if (langElem.includes("zh")) langElem = 'zh';
const lang = langElem || "en";
const { paragraph, ctaLabel, ctaURL } = langs[lang];

const dataAnalyticsState = "personalized|pznXXXXXXX|Docs CP|RHEL 10 announcement banner|" + audience;

const dataAnalyticsCategory = "pznXXXXXXX|Docs CP|RHEL 10 announcement banner|" + audience;

const bannerHTML = `<rh-surface color-palette="light" class="rh-target-pznXXXXXXX" data-analytics-region="pznXXXXXXX-banner">
        <div class="pznXXXXXXX-banner dx-bg-white dx-relative dx-pl-2 lg:dx-pl-0 dx-py-2 dx-flex dx-flex-row dx-justify-start lg:dx-justify-center lg:dx-items-center dx-border dx-border-gray-30">
            <div class="dx-flex dx-justify-start dx-items-start">
                <img class="rh-target-pznXXXXXXX-logo dx-relative dx-mr-2 xl:dx-mr-4" src="https://www.redhat.com/rhdc/managed-files/rhel-logo-img.png" width="48" height="48" alt="Red Hat Summit and Ansiblefest logo">
            </div>
            <div class="dx-flex dx-flex-col lg:dx-flex-row">
                <p class="dx-text-16 lg:dx-text-18 dx-mb-0 dx-mt-0 dx-pb-0 dx-pr-7 lg:dx-pr-2 xl:dx-pr-4 dx-flex dx-items-center">` + paragraph + `</p>
                <rh-cta class="dx-relative">
                    <a
                        href="` + ctaURL + `?percmp=RHCTG0250000447871"
                        data-analytics-text="`+ langs.en.ctaLabel + `"
                        data-analytics-linkType="cta"
                        data-analytics-category="` + dataAnalyticsCategory + `"
                        data-analytics-state="` + dataAnalyticsState + `"
                    >` + ctaLabel + `</a>
                </rh-cta>
            </div>
                <button data-analytics-linkType="uiElement"
                    data-analytics-category="` + dataAnalyticsCategory + `"
                    data-analytics-text="Close"
                    data-analytics-state="` + dataAnalyticsState + `"
                class="pznXXXXXXX-banner-close dx-absolute dx-p-0 dx-border-none dx-align-center dx-justify-center">
                    <img src="https://static.redhat.com/libs/redhat/rh-iconfont/latest/svg/web-icon-close.svg" class="dx-block" height="20" width="20" alt="close banner">
            </button>
        </div>
</rh-surface>`;

const mboxDismissCall = () => {
        const profileVal = "profile.pznXXXXXXX_RHEL_10_announcement_dismissed";
        window.appEventData = window.appEventData || [];
        appEventData.push({
            'event': 'Target trackEvent',
            __adobe : {
                target: {
                    [profileVal]: true
                }
            }
        });
};

if (!localStorage.getItem("pznXXXXXXX-opt-out")) {
    inject("body", bannerHTML, "prepend").then(() => {
        document.querySelector(".pznXXXXXXX-banner-close").addEventListener("click", () => {
            document.querySelector(".rh-target-pznXXXXXXX").remove();
            localStorage.setItem("pznXXXXXXX-opt-out", "true");
            mboxDismissCall();
        });
    });
};
