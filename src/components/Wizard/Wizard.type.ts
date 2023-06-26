type WizarsStep = {
    id: number;
    name: string;
    title: string;
    comp: any;
}

export type WizardType = {
    // navigation: any;
    wizardSteps: WizarsStep[];
};
