type WizarsStep = {
    id: number;
    name: string;
    comp: any;
}

export type WizardType = {
    // navigation: any;
    wizardSteps: WizarsStep[];
};
