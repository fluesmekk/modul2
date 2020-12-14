function createOrUpdatePoll() {
    const inputObj = model.inputs.createPoll;

    model.polls.push({
        isOpen: inputObj.isOpen,
        usersCanAddAlternatives: inputObj.usersCanAddAlternatives,
        question: inputObj.question,
        options: [...inputObj.options],
        votes: {},
    });

    updateView();
}