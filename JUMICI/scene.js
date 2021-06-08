
class Scene{
    constructor(name){
        this.name = name;
        this.currentStep = 0;
        this.length = 0;
        this.actionKeys = new Array();
        this.actionArguments = new Array();
        this.actions = undefined;
    }
    runNextStep(){
        let promise = this.actions.get( this.actionKeys[this.currentStep] ) (this.actionArguments[this.currentStep]);
        this.currentStep++;
        return promise;
    }
    async run(){
        while(this.currentStep<this.length){
            await this.runNextStep();
        }
    }
    setNextStep( actionKey, args){
        this.actionKeys.push(actionKey);
        this.actionArguments.push(args)
        this.length++;
    }
    initialize(){
        this.currentStep = 0;
    }
    setActions(actions){
        this.actions = actions;
    }
}