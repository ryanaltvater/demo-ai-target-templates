(function () {
    // Utility CSS
    // inject:utilityCss
    // endinject

    // Custom CSS
    // inject:customCss
    // endinject

    const forYouContent = {
        pznNumber: "",
        experience: "",
        offer: "",
        site: "RH",
        tacticID: "",
        imageURL: "",
        imageAlt: "",
        ctaType: "primary", // use empty string for blue CTA with arrow
        langs: {
            en: {
                forYouHeading: "Recommended",
                forYouText: "Based on your recent site activity",
                heading: "",
                content: "",
                ctaURL: "",
                ctaText: "",
                removeText: "Don't show me this again.",
                removeConfirmationText: "We won't show you this again.",
            },
            zh: {
                forYouHeading: "推荐",
                forYouText: "根据您最近的站点活动",
                heading: "",
                content: "",
                ctaURL: "",
                ctaText: "",
                removeText: "不再显示此内容。",
                removeConfirmationText: "我们将不再显示此内容。",
            },
            fr: {
                forYouHeading: "Recommandé",
                forYouText: "Basé sur votre activité récente sur le site",
                heading: "",
                content: "",
                ctaURL: "",
                ctaText: "",
                removeText: "Ne plus me montrer ça.",
                removeConfirmationText: "Nous ne vous le montrerons plus.",
            },
            de: {
                forYouHeading: "Empfohlen",
                forYouText: "Basierend auf Ihrer letzten Aktivität auf der Website",
                heading: "",
                content: "",
                ctaURL: "",
                ctaText: "",
                removeText: "Nicht mehr anzeigen.",
                removeConfirmationText: "Wir werden es Ihnen nicht mehr anzeigen.",
            },
            it: {
                forYouHeading: "Consigliato",
                forYouText: "In base alla tua recente attività sul sito",
                heading: "",
                content: "",
                ctaURL: "",
                ctaText: "",
                removeText: "Non mostrarmelo più.",
                removeConfirmationText: "Non lo mostreremo più.",
            },
            ja: {
                forYouHeading: "おすすめ",
                forYouText: "最近のサイトアクティビティに基づいて",
                heading: "",
                content: "",
                ctaURL: "",
                ctaText: "",
                removeText: "これを表示しないでください。",
                removeConfirmationText: "これを表示しません。",
            },
            ko: {
                forYouHeading: "추천",
                forYouText: "최근 사이트 활동을 기반으로",
                heading: "",
                content: "",
                ctaURL: "",
                ctaText: "",
                removeText: "다시 표시하지 않음.",
                removeConfirmationText: "다시 표시하지 않습니다.",
            },
            "pt-br": {
                forYouHeading: "Recomendado",
                forYouText: "Com base na sua atividade recente no site",
                heading: "",
                content: "",
                ctaURL: "",
                ctaText: "",
                removeText: "Não mostrar isso novamente.",
                removeConfirmationText: "Nós não mostraremos isso novamente.",
            },
            es: {
                forYouHeading: "Recomendado",
                forYouText: "Basado en su actividad reciente en el sitio",
                heading: "",
                content: "",
                ctaURL: "",
                ctaText: "",
                removeText: "No volver a mostrar esto.",
                removeConfirmationText: "No volveremos a mostrar esto.",
            }
        }
    }

    // Global functions
    // inject:functions
    // endinject

    // Global scripts
    // inject:scripts
    // endinject

    // HTML content
    // All HTML needs to be inside of a "rh-target-activityID" wrapper class
    // It acts as a namespace, to promote portability and prevent CSS conflicts
})();
