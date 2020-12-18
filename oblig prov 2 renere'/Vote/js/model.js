const model = {
    app: {
        selectedPoll: '',
        currentPoll: 0,
        loggedInUser: 'per',
        currentPage: 'createPoll',
    },

    users: [
        { username: 'per', name: 'Per', password: '123' , voted: false,},
        { username: 'pål', name: 'Pål', password: '123' , voted: false,},
        { username: 'espen', name: 'Espen', password: '123', isAdmin: true , voted: false,},
    ],

    currentPollView: {
        thUpperRow: '',
        tdLowerRow: '',
    },

    savedWhenEdit: {
        isOpen: '',
        question: '',
        options: [],
    },

    savedFromInput: {
        isOpen: '',
        question: '',
        options: [],
    },


    inputs: {
        createPoll: {
            pollId: null,
            newAlternative: '',
            question: 'Hvem er den tøffeste læreren ved GET Academy?',
            options: ['Geir', 'Eskil', 'Terje'],
            optionsVotes: [0, 0, 0],
            usersCanAddAlternatives: true,
        },
    },

    polls: [],
};

/*
    Hvilke andre måter kunne vi lagret stemmene på?
        - Hva er best for å legge til nye stemmer?
        - Hva er best for å endre stemmer?
        - Hva er best for å telle opp stemmer?

    Hvordan ville det blitt om hvert alternativ var et objekt, med en id?
*/