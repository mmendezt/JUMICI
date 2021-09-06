class Scene {
    constructor(input) {
        if (typeof (input) == 'string') {
            this.name = input;
            this.currentStep = 0;
            this.length = 0;
            this.actionKeys = new Array();
            this.actionArguments = new Array();
            this.actions = undefined;
        }
        if (typeof (input) == 'object') {
            this.name = input.name;
            this.currentStep = 0;
            this.length = input.length;
            this.actionKeys = input.actionKeys;
            this.actionArguments = input.actionArguments;
            this.actions = undefined;
        }


    }
    runNextStep() {
        let promise = this.actions.get(this.actionKeys[this.currentStep])(this.actionArguments[this.currentStep]);
        this.currentStep++;
        return promise;
    }
    async run() {
        this.currentStep = 0;
        while (this.currentStep < this.length) {
            await this.runNextStep();
        }
    }
    setNextStep(actionKey, args) {
        this.actionKeys.push(actionKey);
        this.actionArguments.push(args)
        this.length++;
    }
    setActions(actions) {
        this.actions = actions;
    }
}