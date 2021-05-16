import LandingSectionContent from "./section-landing/landing-section";
import WorkoutSectionContent from "./section-workout/workout-section";
import NutritionSectionContent from "./section-nutrition/nutrition-section";
import CalculatePageContent from "./section-calculate/calculate-section";
import LoginSectionContent from "./section-login/login-section";
import React from "react";

export const SectionItem = [
    {
        cName: 'landing',
        componentSection: <LandingSectionContent/>,
    },
    {
        cName: 'workouts',
        componentSection: <WorkoutSectionContent/>,
    },
    {
        cName: 'nutrition',
        componentSection: <NutritionSectionContent/>,
    },
    {
        cName: 'calculate',
        componentSection: <CalculatePageContent/>,
    },
    {
        cName: 'login',
        componentSection: <LoginSectionContent/>,
    },
]