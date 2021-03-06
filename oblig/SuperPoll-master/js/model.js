const model = {
    tempIsOpen: '',
    isOpenVarOninput: '',
    questionVarOnInput: '',
    questionTemporary: '',
    saveState: '',
    drawHtmlOptionsLower: '',
    drawHtmlOptionsUpper: '',

    oninputs: {

    },

    
    options: {
        optionsTemporary : '',
        rowOptionsTemporary : '',
        lowerRowOptionsHtml : '',
        upperRowOptionsHtml : '',
    },
    
    app: {
        currentPoll: 1,
        loggedInUser: 'per',
        currentPage: 'createVote',
        currentPoll: '',
    },

    users: [
        { username: 'per', name: 'Per', password: '123' },
        { username: 'pål', name: 'Pål', password: '123' },
        { username: 'espen', name: 'Espen', password: '123', isAdmin: true },
    ],

    inputs: {
        createPoll: {
            pollId: null,
            newAlternative: '',
            question: 'Hvem er den tøffeste læreren ved GET Academy?',
            options: ['Geir', 'Eskil', 'Terje'],
            usersCanAddAlternatives: true,
            isOpen: true,
        },
    },

    polls: [],

    votes: [],
};

/*
    Hvilke andre måter kunne vi lagret stemmene på?
        - Hva er best for å legge til nye stemmer?
        - Hva er best for å endre stemmer?
        - Hva er best for å telle opp stemmer?

    Hvordan ville det blitt om hvert alternativ var et objekt, med en id?
*/