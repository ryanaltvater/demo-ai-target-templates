// Global activity scripts go here
import("@rhds/elements/rh-cta/rh-cta.js");

let lang = window.location.pathname.split("/")[1] || "en";

let { pznNumber, experience, offer, site, tacticID, imageURL, imageAlt, imageHeight, imageWidth, ctaType, redDotParam, langs } = forYouContent;

let { forYouHeading, forYouText, heading, content, ctaURL, ctaText, removeText, removeConfirmationText } = langs[lang];

pznNumber = pznNumber.toLowerCase();
if (!pznNumber.includes("pzn")) {
    pznNumber = "pzn" + pznNumber;
}

if (content && !content.includes("<")) {
    content = "<p>" + content + "</p>";
}

forYouHeading = forYouHeading || "Recommended";
forYouText = forYouText || "Based on your recent site activity";
removeText = removeText || "Don't show me this again.";
removeConfirmationText = removeConfirmationText || "We won't show you this again.";

const trackingPrefix = pznNumber + "_" + experience.replaceAll(" ", "_");
const dataAnalyticsState = "personalized|" + pznNumber + (site ? "|" + site + "|" : "") + experience + "|for you" + (offer ? "|" + offer : "");
const dataAnalyticsCategory = "For You|" + pznNumber + "|" + experience + (offer ? "|" + offer : "");
const dismissedForYouProfileVal = "profile." + trackingPrefix + "_dismissed";

const forYouHeaderHTML = `<hgroup class="dx-mb-3">
        <h3 class="for-you-heading dx-mb-1 dx-text-18">` + forYouHeading + `</h3>
        <span class="for-you-text dx-block dx-text-gray-60 dx-text-14 dx-text-gray-60"><i>` + forYouText + `</i></span>
    </hgroup>`;

const forYouImageHTML = imageURL ? `<img src="` + imageURL + `" height="auto" width="100%" alt="` + imageAlt + `" class="for-you-image"/>` : "";

let forYouContentHeadingHTML = "";

if (heading) {
    let classes = "dx-font-light dx-text-24 dx-mt-3";
    if (!content) {
      classes += " dx-mb-0";
    }
    forYouContentHeadingHTML = '<h4 class="' + classes + '">' + heading + '</h4>';
  }

const forYouContentHTML = content;

const forYouCTAHTML = ctaText ? `<rh-cta class="dx-mt-3" ` + (ctaType ? ` variant="` + ctaType : "") + `">
       <a href="` + ctaURL + `?percmp=` + tacticID + `"
        data-analytics-linkType="cta"
        data-analytics-text="` + langs.en.ctaText + `"
        data-analytics-category="` + dataAnalyticsCategory + `"
        data-analytics-state="` + dataAnalyticsState + `"
        >` + ctaText + `</a>
    </rh-cta>` : "";

const htmlParts = [forYouHeaderHTML, forYouImageHTML, forYouContentHeadingHTML, forYouContentHTML, forYouCTAHTML];

const forYouHTML = htmlParts.filter(Boolean).join("");

const forYouFooterHTML =  `<div id="for-you-footer" class="dx-text-12">
    <button id="for-you-removal-button"
        class="dx-px-0 dx-text-12"
        aria-controls="for-you-removal-text"
        data-analytics-linkType="cta"
        data-analytics-text="` + langs.en.removeText + `"
        data-analytics-category="` + dataAnalyticsCategory + `"
        data-analytics-state="` + dataAnalyticsState + `"
    >` + removeText + `</button>
    <span id="for-you-removal-text" class="dx-text-12 dx-mb-0 dx-hidden">` + removeConfirmationText + `</span>
</div>`;

const dismissForYou = () => {
    window.appEventData = window.appEventData || [];
    appEventData.push({
        "event": "Target trackEvent",
        __adobe : {
            target: {
                [dismissedForYouProfileVal]: true
            }
        }
    });
    localStorage.setItem(trackingPrefix, "dismissed");
};

if (localStorage.getItem(trackingPrefix) !== "dismissed") {
    runPoll(() => {
        return document.querySelectorAll("#for-you-mbox").length &&
        document.querySelectorAll("#main-nav-recommendations").length
    }).then(() => {
        const forYouSection = document.querySelector("#main-nav-recommendations");
        const forYouMbox = forYouSection?.querySelector("#for-you-mbox");

        const wrapForYouMboxAndAddHTML = () => {
            const forYouWrapper = document.createElement("div");
            forYouWrapper.classList.add("rh-target-" + pznNumber);
            forYouMbox.parentNode.insertBefore(forYouWrapper, forYouMbox);
            forYouWrapper.appendChild(forYouMbox);

            const forYouFooter = document.createElement("div");
            forYouFooter.classList.add("rh-nav-dropdown-footer");
            forYouFooter.innerHTML = forYouFooterHTML;
            forYouWrapper.appendChild(forYouFooter);

            forYouMbox.innerHTML = forYouHTML;
        }

        const addRedDotIfNeeded = () => {
            if (!localStorage.getItem(trackingPrefix)) {
                forYouSection.classList.add("new");
            }
        };

        const addDontShowMeThisAgainEvent = () => {
            const forYouFooterButton = document.querySelector("#for-you-removal-button");
            const removalText = document.querySelector("#for-you-removal-text");

            forYouFooterButton.addEventListener("click", () => {
                forYouFooterButton.classList.add("dx-hidden");
                removalText.classList.remove("dx-hidden");
                dismissForYou();
            });
        };

        const hideRedDotWhenExpandedEvent = () => {
            const handleToggle = (e) => {
                if (forYouSection.classList.contains("new")) {
                    localStorage.setItem(trackingPrefix, "expanded");
                }
                forYouSection.classList.remove("new");
                forYouSection.removeEventListener("toggle", handleToggle);
            };

            forYouSection.addEventListener("toggle", handleToggle);
        };

        wrapForYouMboxAndAddHTML();
        addRedDotIfNeeded();
        hideRedDotWhenExpandedEvent();
        addDontShowMeThisAgainEvent();
    }).catch(err => {
    });
}
