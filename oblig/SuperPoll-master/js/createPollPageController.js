function createOrUpdatePoll() {
    const inputObj = model.inputs.createPoll;

    model.polls.push({
        usersCanAddAlternatives: inputObj.usersCanAddAlternatives,
        question: inputObj.question,
        options: [...inputObj.options],
        votes: {},
        isOpen: inputObj.isOpen,
    });

    updateView();
}