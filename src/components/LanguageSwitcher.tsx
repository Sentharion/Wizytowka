"use client"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { ChevronDown } from "lucide-react";
import {FlagPl} from "@sankyu/react-circle-flags/flags/pl"
import {FlagGb} from "@sankyu/react-circle-flags/flags/gb"

const LanguageSwitcher = () => {
    const { i18n: i18nInstance } = useTranslation();
    const currentLang = i18nInstance.language;
    const [selectorVisible, setSelectorVisible] = useState(false);

    const handleSelector = () => {
        setSelectorVisible(!selectorVisible);
    };

    const handleLanguageChange = (language: string) => {
        i18n.changeLanguage(language);
        setSelectorVisible(false);
    };

    const getIcon = (language: string) => {
        switch (language) {
            case "pl":
                return <FlagPl className="ml-2 h-4 w-4 inline-block transition-transform" />;
            case "en":
                return <FlagGb className="ml-2 h-4 w-4 inline-block transition-transform" />;
        }
    };

    return (
        <div className="flex items-center gap-4 relative">
            <div className="relative">
                <button onClick={handleSelector} className={`rounded-full flex items-center gap-2 border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-medium transition-colors hover:border-violet-400 hover:bg-violet-500/10 cursor-pointer ${currentLang && "text-violet-400 border-violet-500 hover:border-violet-300 bg-violet-500/10"}`}>
                    {getIcon(currentLang)}
                    {currentLang === "pl" ? "Polski" : "English"}
                    <ChevronDown className="ml-2 h-4 w-4 inline-block transition-transform" />
                </button>
                
                {selectorVisible && (
                    <div className="absolute z-50 mt-2 w-32 rounded-xl border border-slate-800 bg-slate-900/95 py-2 shadow-xl backdrop-blur-md">
                        <button
                            onClick={() => handleLanguageChange("pl")}
                            className={`flex items-center gap-2 w-full px-4 py-2 text-left cursor-pointer text-sm font-medium transition-colors ${currentLang === "pl" ? "bg-violet-500/15 text-violet-400" : "text-slate-300 hover:bg-violet-500/10 hover:text-violet-400"}`}
                        >
                            <FlagPl className="ml-2 h-4 w-4 inline-block transition-transform" />
                            Polski
                        </button>
                        <button
                            onClick={() => handleLanguageChange("en")}
                            className={`w-full px-4 flex items-center gap-2 py-2 text-left cursor-pointer text-sm font-medium transition-colors ${currentLang === "en" ? "bg-violet-500/15 text-violet-400" : "text-slate-300 hover:bg-violet-500/10 hover:text-violet-400"}`}
                        >
                            <FlagGb className="ml-2 h-4 w-4 inline-block transition-transform" />
                            English
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageSwitcher;