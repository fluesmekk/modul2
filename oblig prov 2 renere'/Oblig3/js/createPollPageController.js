function createOrUpdatePoll() {
    model.inputs.tempPollId += 1;
    const inputObj = model.inputs.createPoll;

    model.polls.push({
        isOpen: true,
        usersCanAddAlternatives: inputObj.usersCanAddAlternatives,
        question: inputObj.question,
        options: [...inputObj.options],
        votes: {},
    });

    updateView();
}