import loginPage from "../../../pages/loginPage";
import SettingsPageNavigation from "../../../pages/settings/SettingsPageNavigation";
import OnboardingPageStepOne from "../../../pages/onboarding/onboardingPageStepOne";
import toast from "../../../pages/Toast";
import OnboardingPageStepFive from "../../../pages/onboarding/OnboardingPageStepFive";
import NavigationPage from "../../../pages/NavigationPage";
import SettingsWeightHeightPage from "../../../pages/settings/SettingsWeightHeightPage";
import settingsWeightHeightPage from "../../../pages/settings/SettingsWeightHeightPage";
import onboardingPageStepOne from "../../../pages/onboarding/onboardingPageStepOne";
import onboardingPageNavigation from "../../../pages/onboarding/OnboardingPageNavigation";
import onboardingPageStepTwo from "../../../pages/onboarding/OnboardingPageStepTwo";
import onboardingPageStepThree from "../../../pages/onboarding/OnboardingPageStepThree";
import onboardingPageStepFour from "../../../pages/onboarding/OnboardingPageStepFour";


describe('Settings', () => {
    const SettingsPagePersonalDetails = OnboardingPageStepOne;
    const SettingsPagePlan = OnboardingPageStepFive;

    const persons = [{
        name: "Mustermann",
        firstName: "Max",
        email: "maxmustermann@gmail.com",
        birthdate: "26.08.1999",
        gender: "male"
    }, {
        name: "Musterfrau",
        firstName: "Maria",
        email: "mariamustermann@gmail.com",
        birthdate: "11.11.2002",
        gender: "female"
    }];
    const weightHeights = [{
        weight: "80",
        height: "180",
    }, {
        weight: "90",
        height: "190",
    }];
    const plans = [{
        goalFat: "98",
        goalCarbs: "331",
        goalProtein: "184",
        calories: "2942"
    }, {
        goalFat: "70",
        goalCarbs: "237",
        goalProtein: "132",
        calories: "2106"
    }];


    beforeEach(() => {

        cy.viewport('iphone-x')
        cy.visit("/login");
        cy.wait(1500);
        loginPage.login("yanik1999@hotmail.com", "1234")
        loginPage.checkLoginSuccess();
        cy.wait(500);
        NavigationPage.clickSettings();
        cy.wait(500);
    });

        it('Change all Personal details and check', () => {
            SettingsPageNavigation.clickPersonalSettings()
            cy.wait(1500);

            // Wrap the promise in cy.wrap
            cy.wrap(SettingsPagePersonalDetails.getName()).then((name) => {
                const personalDetails = name === "Mustermann" ? persons[1] : persons[0];

                SettingsPagePersonalDetails.setName(personalDetails.name);
                SettingsPagePersonalDetails.setFirstName(personalDetails.firstName);
                SettingsPagePersonalDetails.setEmail(personalDetails.email);
                SettingsPagePersonalDetails.setBirthdate(personalDetails.birthdate);
                personalDetails.gender === "male" ? SettingsPagePersonalDetails.clickMale() : SettingsPagePersonalDetails.clickFemale();

                SettingsPageNavigation.clickSave();
                toast.toastMessage("Daten gespeichert");

                SettingsPageNavigation.clickPersonalSettings();
                cy.wait(1500);

                SettingsPagePersonalDetails.assertName(personalDetails.name);
                SettingsPagePersonalDetails.assertFirstName(personalDetails.firstName);
                SettingsPagePersonalDetails.assertEmail(personalDetails.email);
                SettingsPagePersonalDetails.assertBirthdate(personalDetails.birthdate);

                cy.wrap(SettingsPagePersonalDetails.getGender()).then((gender) => {
                    expect(gender).to.eq(personalDetails.gender)
                })
            });
        });

        it('check regex and validation on Personal Details', () => {
            SettingsPageNavigation.clickPersonalSettings()
            cy.wait(1500);

            SettingsPageNavigation.checkSaveButtonIsDisabled();
            SettingsPagePersonalDetails.setName("Muster.mann");
            SettingsPagePersonalDetails.checkNameIsInvalid();
            SettingsPagePersonalDetails.setName("Musterman");
            SettingsPageNavigation.checkSaveButtonIsEnabled();
            SettingsPagePersonalDetails.checkNameIsValid();

            SettingsPagePersonalDetails.setFirstName("M .ax");
            SettingsPageNavigation.checkSaveButtonIsDisabled();
            SettingsPagePersonalDetails.checkFirstNameIsInvalid();
            SettingsPagePersonalDetails.setFirstName("Max");
            SettingsPageNavigation.checkSaveButtonIsEnabled();
            SettingsPagePersonalDetails.checkFirstNameIsValid();

            SettingsPagePersonalDetails.setEmail("maxmustermann@");
            SettingsPageNavigation.checkSaveButtonIsDisabled();
            SettingsPagePersonalDetails.checkEmailIsInvalid();
            SettingsPagePersonalDetails.setEmail("maxmustermann@gmail.com");
            SettingsPageNavigation.checkSaveButtonIsEnabled();
            SettingsPagePersonalDetails.checkEmailIsValid();

            SettingsPagePersonalDetails.setBirthdate("26.999");
            SettingsPageNavigation.checkSaveButtonIsDisabled();
            SettingsPagePersonalDetails.checkBirthdayIsInvalid();
            SettingsPagePersonalDetails.setBirthdate("26.08.1999");
            SettingsPageNavigation.checkSaveButtonIsEnabled();
            SettingsPagePersonalDetails.checkBirthdayIsValid();

            SettingsPageNavigation.clickSave();
            toast.toastMessage("Daten gespeichert")
        });

        it('Change Plan', () => {
            SettingsPageNavigation.clickPlanSettings()
            cy.wait(1500);

            // Wrap the promise in cy.wrap
            cy.wrap(SettingsPagePlan.getFat()).then((fat) => {
                const plan = fat === "98" ? plans[1] : plans[0];

                SettingsPagePlan.setGoalFat(plan.goalFat);
                SettingsPagePlan.setGoalCarbs(plan.goalCarbs);
                SettingsPagePlan.setGoalProtein(plan.goalProtein);

                SettingsPageNavigation.clickSave();
                toast.toastMessage("Daten gespeichert");

                SettingsPageNavigation.clickPlanSettings();
                cy.wait(1500);

                SettingsPagePlan.assertGoalFat(plan.goalFat);
                SettingsPagePlan.assertGoalCarbs(plan.goalCarbs);
                SettingsPagePlan.assertGoalProtein(plan.goalProtein);
                SettingsPagePlan.assertCalorieGoal(plan.calories);
            });
        });

        it('check regex and validation on Plan', () => {
            SettingsPageNavigation.clickPlanSettings()
            cy.wait(1500);

            // Wrap the promise in cy.wrap
            cy.wrap(SettingsPagePlan.getFat()).then((fat) => {
                const plan = fat === "98" ? plans[1] : plans[0];

                SettingsPageNavigation.checkSaveButtonIsDisabled();
                SettingsPagePlan.setGoalFat("asdf");
                SettingsPagePlan.checkGoalFatIsInvalid();
                SettingsPagePlan.setGoalFat(plan.goalFat);
                SettingsPageNavigation.checkSaveButtonIsEnabled();
                SettingsPagePlan.checkGoalFatIsValid();

                SettingsPagePlan.setGoalCarbs("asdf");
                SettingsPagePlan.checkGoalCarbsIsInvalid();
                SettingsPagePlan.setGoalCarbs(plan.goalCarbs);
                SettingsPageNavigation.checkSaveButtonIsEnabled();
                SettingsPagePlan.checkGoalCarbsIsValid();

                SettingsPagePlan.setGoalProtein("asdf");
                SettingsPagePlan.checkGoalProteinIsInvalid();
                SettingsPagePlan.setGoalProtein(plan.goalProtein);
                SettingsPageNavigation.checkSaveButtonIsEnabled();
                SettingsPagePlan.checkGoalProteinIsValid();

                SettingsPageNavigation.clickSave();
                toast.toastMessage("Daten gespeichert");
            });
        });
    it('Change Weight and Height', () => {
        SettingsPageNavigation.clickWeightHeightSettings()
        cy.wait(1500);

        // Wrap the promise in cy.wrap
        cy.wrap(SettingsWeightHeightPage.getHeightInputValue()).then((height) => {
            const weightHeight = height === "180" ? weightHeights[1] : weightHeights[0];

            SettingsWeightHeightPage.checkSaveHeightButtonIsDisabled();
            SettingsWeightHeightPage.checkSaveWeightButtonIsDisabled();

            SettingsWeightHeightPage.setHeight(weightHeight.height);
            SettingsWeightHeightPage.checkSaveHeightButtonIsEnabled();
            SettingsWeightHeightPage.clickSaveHeight()
            toast.toastMessage("Grösse Gespeichert!");

            SettingsWeightHeightPage.setWeight(weightHeight.weight);
            SettingsWeightHeightPage.checkSaveWeightButtonIsEnabled();
            SettingsWeightHeightPage.clickSaveWeight()
            toast.toastMessage("Gewicht Gespeichert!");

            SettingsPageNavigation.clickSettingsBack();
            SettingsPageNavigation.clickWeightHeightSettings();

            cy.wait(1000);

            SettingsWeightHeightPage.assertHeightInputValue(weightHeight.height);
            SettingsWeightHeightPage.assertWeightInputValue(weightHeight.weight);

        });
    });

    it('check regex and validation on Weight and Height', () => {
        SettingsPageNavigation.clickWeightHeightSettings()
        cy.wait(1500);
        cy.wrap(SettingsWeightHeightPage.getHeightInputValue()).then((height) => {
            const weightHeight = height === "180" ? weightHeights[1] : weightHeights[0];

            settingsWeightHeightPage.checkSaveHeightButtonIsDisabled();
            settingsWeightHeightPage.checkSaveWeightButtonIsDisabled();

            SettingsWeightHeightPage.setHeight("asdf");
            SettingsWeightHeightPage.checkHeightIsInvalid();
            SettingsWeightHeightPage.setHeight(weightHeight.height);
            SettingsWeightHeightPage.checkHeightIsValid();
            settingsWeightHeightPage.checkSaveHeightButtonIsEnabled();
            SettingsWeightHeightPage.clickSaveHeight()
            toast.toastMessage("Grösse Gespeichert!");

            SettingsWeightHeightPage.setWeight("asdf");
            SettingsWeightHeightPage.checkWeightIsInvalid();
            SettingsWeightHeightPage.setWeight(weightHeight.weight);
            SettingsWeightHeightPage.checkWeightIsValid();
            settingsWeightHeightPage.checkSaveWeightButtonIsEnabled();
            SettingsWeightHeightPage.clickSaveWeight()
            toast.toastMessage("Gewicht Gespeichert!");
        });

    });

    it('Restart Onboarding', () => {
       SettingsPageNavigation.clickOnboard();
       cy.wait(1500);

       cy.url().should('include', '/onboard');

        onboardingPageStepOne.setName("Mustermann");
        onboardingPageStepOne.setFirstName("Max");
        onboardingPageStepOne.setEmail("maxmustermann@gmail.com");
        onboardingPageStepOne.setBirthdate("26.08.1999");
        onboardingPageStepOne.clickMale();

        onboardingPageNavigation.clickNext();
        toast.toastMessage("Daten gespeichert")

        onboardingPageStepTwo.setWeight("80");
        onboardingPageStepTwo.setHeight("180");

        onboardingPageNavigation.clickNext();
        toast.toastMessage("Grösse gespeichert")

        onboardingPageStepThree.clickActivityLevelOne();

        onboardingPageNavigation.clickNext();

        onboardingPageStepFour.clickGoalThree();

        onboardingPageNavigation.clickNext();
        //Complete onboarding
        onboardingPageNavigation.clickNext();
        toast.toastMessage("Onboarding abgeschlossen")
        cy.url().should('include', '/app');
    });

    it('Logout', () => {
        SettingsPageNavigation.clickLogout();
        cy.wait(1500);
        cy.url().should('include', '/login');
        cy.visit("/app");
        cy.url().should('include', '/login');
    });


});