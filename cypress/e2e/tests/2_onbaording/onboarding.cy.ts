import loginPage from "../../../pages/loginPage";
import onboardingPageStepOne from "../../../pages/onboarding/onboardingPageStepOne";
import onboardingPageNavigation from "../../../pages/onboarding/OnboardingPageNavigation";
import toast from "../../../pages/Toast";
import onboardingPageStepTwo from "../../../pages/onboarding/OnboardingPageStepTwo";
import onboardingPageStepThree from "../../../pages/onboarding/OnboardingPageStepThree";
import onboardingPageStepFour from "../../../pages/onboarding/OnboardingPageStepFour";
import onboardingPageStepFive from "../../../pages/onboarding/OnboardingPageStepFive";


describe('Onboarding', () => {
    beforeEach(() => {

        cy.viewport('iphone-x')
        cy.visit("/login");
        loginPage.login("yanik1999@hotmail.com", "1234")
        loginPage.checkLoginSuccess();
        cy.visit("/app/onboard");
        cy.wait(1000);
    });

    it('complete onboarding with happy path',  () => {
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


    it('check all regex', () => {

        onboardingPageStepOne.setName("Muster.mann");
        onboardingPageStepOne.checkNameIsInvalid();
        onboardingPageStepOne.setName("Mustermann");
        onboardingPageStepOne.checkNameIsValid();

        onboardingPageStepOne.setFirstName("M .ax");
        onboardingPageStepOne.checkFirstNameIsInvalid();
        onboardingPageStepOne.setFirstName("Max");
        onboardingPageStepOne.checkFirstNameIsValid();

        onboardingPageStepOne.setEmail("maxmustermann@");
        onboardingPageStepOne.checkEmailIsInvalid();
        onboardingPageStepOne.setEmail("maxmustermann@gmail.com");
        onboardingPageStepOne.checkEmailIsValid();

        onboardingPageStepOne.setBirthdate("26.081999");
        onboardingPageStepOne.checkBirthdayIsInvalid();
        onboardingPageStepOne.setBirthdate("26.08.1999");
        onboardingPageStepOne.checkBirthdayIsValid();
        onboardingPageStepOne.clickMale();
        onboardingPageStepOne.checkMaleIsSelected();
        onboardingPageStepOne.clickFemale();
        onboardingPageStepOne.checkFemaleIsSelected();
        onboardingPageStepOne.clickMale();

        onboardingPageNavigation.buttonPreviousIsDisabled()
        onboardingPageNavigation.clickNext();
        toast.toastMessage("Daten gespeichert")

        onboardingPageStepTwo.setWeight("asdf");
        onboardingPageStepTwo.checkWeightIsInvalid();
        onboardingPageStepTwo.setWeight("80");
        onboardingPageStepTwo.checkWeightIsValid();
        onboardingPageStepTwo.setHeight("asdf");
        onboardingPageStepTwo.checkHeightIsInvalid();
        onboardingPageStepTwo.setHeight("180");
        onboardingPageStepTwo.checkHeightIsValid();

        onboardingPageNavigation.clickNext();
        toast.toastMessage("Grösse gespeichert")
        onboardingPageNavigation.clickNext();
        onboardingPageNavigation.clickNext();

        onboardingPageStepFive.setGoalCarbs("asdf");
        onboardingPageStepFive.checkGoalCarbsIsInvalid();
        onboardingPageStepFive.setGoalCarbs("50");
        onboardingPageStepFive.checkGoalCarbsIsValid();
        onboardingPageStepFive.setGoalProtein("asdf");
        onboardingPageStepFive.checkGoalProteinIsInvalid();
        onboardingPageStepFive.setGoalProtein("30");
        onboardingPageStepFive.checkGoalProteinIsValid();
        onboardingPageStepFive.setGoalFat("asdf");
        onboardingPageStepFive.checkGoalFatIsInvalid();
        onboardingPageStepFive.setGoalFat("20");
        onboardingPageStepFive.checkGoalFatIsValid();

        onboardingPageNavigation.clickNext();
        toast.toastMessage("Onboarding abgeschlossen")

    });
    it('check toast if not all infos provided', () => {
        onboardingPageStepOne.setName("__NULL__");
        onboardingPageStepOne.checkNameIsInvalid();
        onboardingPageNavigation.clickNext();
        toast.toastMessage("Bitte fülle alle Felder aus")
        onboardingPageStepOne.setName("Mustermann");

        onboardingPageStepOne.setFirstName("__NULL__");
        onboardingPageStepOne.checkFirstNameIsInvalid();
        onboardingPageNavigation.clickNext();
        toast.toastMessage("Bitte fülle alle Felder aus")
        onboardingPageStepOne.setFirstName("Max");

        onboardingPageStepOne.setEmail("__NULL__");
        onboardingPageStepOne.checkEmailIsInvalid();
        onboardingPageNavigation.clickNext();
        toast.toastMessage("Bitte fülle alle Felder aus")
        onboardingPageStepOne.setEmail("maxmustermann@gmail.com");

        onboardingPageStepOne.setBirthdate("__NULL__");
        onboardingPageStepOne.checkBirthdayIsInvalid();
        onboardingPageNavigation.clickNext();
        toast.toastMessage("Bitte fülle alle Felder aus")
        onboardingPageStepOne.setBirthdate("26.08.1999");

        onboardingPageNavigation.clickNext();
        toast.toastMessage("Daten gespeichert")

        onboardingPageStepTwo.setWeight("__NULL__");
        onboardingPageNavigation.clickNext();
        toast.toastMessage("Bitte fülle alle Felder aus")
        onboardingPageStepTwo.setWeight("80");


        onboardingPageStepTwo.setHeight("__NULL__");
        onboardingPageNavigation.clickNext();
        toast.toastMessage("Bitte fülle alle Felder aus")
        onboardingPageStepTwo.setHeight("180");

        onboardingPageNavigation.clickNext();
        toast.toastMessage("Grösse gespeichert")

        onboardingPageStepThree.clickActivityLevelOne();
        onboardingPageNavigation.clickNext();

        onboardingPageStepFour.clickGoalThree();
        onboardingPageNavigation.clickNext();

        onboardingPageStepFive.setGoalCarbs("__NULL__");
        onboardingPageStepFive.checkGoalCarbsIsInvalid();
        onboardingPageNavigation.clickNext();
        toast.toastMessage("Bitte fülle alle Felder aus")
        onboardingPageStepFive.setGoalCarbs("328");

        onboardingPageStepFive.setGoalProtein("__NULL__");
        onboardingPageStepFive.checkGoalProteinIsInvalid();
        onboardingPageNavigation.clickNext();
        toast.toastMessage("Bitte fülle alle Felder aus")
        onboardingPageStepFive.setGoalProtein("150");

        onboardingPageStepFive.setGoalFat("__NULL__");
        onboardingPageStepFive.checkGoalFatIsInvalid();
        onboardingPageNavigation.clickNext();
        toast.toastMessage("Bitte fülle alle Felder aus")
        onboardingPageStepFive.setGoalFat("100");

        onboardingPageNavigation.clickNext();
        toast.toastMessage("Onboarding abgeschlossen")
    });

});