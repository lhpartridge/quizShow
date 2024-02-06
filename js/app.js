/**
 * Quiz game
 * Trivia game about France and the French language
 * Three rounds
 * 
 * Round 1
 * Identify Paris landmarks 
 * Display an image 
 * Give a hint that is linked to a timer
 * Hint may be in text or audio
 *  10 points added or subtracted from score
 * 
 * Round 2
 * French > English translation of simple phrases
 *  20 points
 * 
 * Round 3
 * Choose the right homophone to complete a sentence
 * 30 points
 * 
 * Bonus round
 * Unscramble French sentences
 * 
 * Pseudocode
 * Set up start game button
 * Get access to the message board, the gameboard, the player names, and the scores
 * Set up the array of objects for the questions
 * Set up the messages for the host and the contestants
 * 
 * 
 * Gameboard
 *  Functions
 *      Set up gameboard for the round
 *      Set round
 *      Display questions and answer choices
 *      Add event listener to answer choices
 *      Check answers
 *      Change score
 *      
 *  Display messages
 *      The host will greet the audience and introduce the players
 *      The host will introduce the round and tell the scoring
 * 
 *  Host
 * 
 *  Contestants 
 *      Get the name elements from the DOM
 *      Display the name for each contestant
 *      Choose contestant to answer
 *      Choose answer
 * 
 * Score
 *      Get the score elements from the DOM
 *      Update the score after each answer
 * 
 *      
 */

/**
 * Characters
 * Host Guy Souriard 
 * Contestant 1 Roche 
 * Contestant 2 Claire
 * Contestant 3 Dominique 
 * 
 * Game content
 * Round 1
 * Array of objects
 *     id, name, image, distractor 1, distractor 2
 */

// const messageBoard = document.getElementById('messageBoard')
// messageBoard.innerText = round1StartMsg


// Messages
const messages =  // an array of arrays with objects
        [
        // an array of start messages
            [
                {
                    type: 'start',
                    id: '1',
                    name: 'round0StartMsg',
                    text: 'Bonjour, messieurs et mesdames!  Bienvenue au Coup de Foudre!  Le jeu qui choque!  Je suis Guy Souriard.  Cliquez le bouton bleu pour commencer le jeu.'
                },
                {
                    type: 'start',
                    id: '2',
                    name: 'round0IntroMsg',
                    text: 'On a trois candidats qui sont prets de nous montre leur croissance de la France!'
                },
                {
                    type: 'start',
                    id: '3',
                    name: 'contestant1Msg',
                    text: 'Il y a Omar, etudiant en ecole de commerce.'
                },
                {
                    type: 'start',
                    id: '4',
                    name: 'contestant2Msg',
                    text: 'Claire parcourt partout dans son role d\'agent de voyage.'
                },
                {
                    type: 'start',
                    id: '5',
                    name: 'contestant3Msg',
                    text: 'Et c\'est Dominique qui est aussi dans le monde de divertissements, le best boy d\'une equipe de tournage.'
                },
                {
                    type: 'start',
                    id: '6',
                    name: 'contestant3Msg',
                    text: 'Cliquez le bouton rouge pour commencer le premier tour.'
                }
            ],
            // an array of round1 messages
            [
                {
                    type: 'round1',
                    id: '1',
                    name: 'round1Intro',
                    text: 'Au premier tour, les trois vont nommer des monuments de Paris.  Cliquez le bouton rouge pour proposer le premier.'
                },
                {
                    type: 'round1',
                    id: '2',
                    name: 'round1Question1',
                    text: 'Nommez ce monument de Paris'
                },
                {
                    type: 'round1',
                    id: '3',
                    name: '',
                    text: 'Question 2'
                },
                {
                    type: 'round1',
                    id: '4',
                    name: '',
                    text: 'Question 3'
                },
                {
                    type: 'round1',
                    id: '5',
                    name: '',
                    text: 'Question 4'
                },
                {
                    type: 'round1',
                    id: '6',
                    name: '',
                    text: 'Question 5'
                },
                {
                    type: 'round1',
                    id: '7',
                    name: '',
                    text: 'End of Round 1'
                },
                {
                    type: 'round1',
                    id: '8',
                    name: '',
                    text: 'Cliquez le bouton rouge pour commencer le deuxieme tour.'
                }
            ],
            [

            ]
        ]


const round1Questions = [
    {
        id: 1,
        name: 'eiffel',
        src: 'media/tower.jpg',
        question: 'Nommez ce monument de Paris:',
        solution: 'la tour Eiffel',
        distractor1: 'la Tour d\'Argent',
        distractor2: 'le Tour de France'
    },
    {
        id: '2',
        name: 'louvre',
        src: 'media/louvre.jpg',
        question: 'Nommez ce monument de Paris:',
        solution: 'le musee du Louvre',
        distractor1: 'le Palais de Versailles',
        distractor2: 'le musee d\'Orsay'
    },
    {
        id: '3',
        name: 'arc',
        src: 'media/arc2.jpg',
        question: 'Nommez ce monument de Paris:',
        solution: 'l\'Arc de Triomphe',
        distractor1: 'l\'Arche de la Defense',
        distractor2: 'le Triomphe de Napoleon'
    },
    {
        id: '4',
        name: 'notreDame',
        src: 'media/notreDame2.jpg',
        question: 'Nommez ce monument de Paris:',
        solution: 'la cathedrale de Notre Dame',
        distractor1: 'le Sacre Coeur',
        distractor2: 'la Sainte Chapelle'
    },
    {
        id: '5',
        name: 'pompidou',
        src: 'media/pompidou.jpg',
        question: 'Nommez ce monument de Paris:',
        solution: 'le Centre Pompidou',
        distractor1: 'les Halles',
        distractor2: 'la Pantheon'
    },
    {
        id: '6',
        name: 'coeur',
        src: 'media/sacreCoeur.jpg',
        question: 'Nommez ce monument de Paris:',
        solution: 'le Sacre Coeur',
        distractor1: 'la cathedrale de Notre Dame',
        distractor2: 'le Mont St-Michel'
    }
]

const round2Questions = [
        {
        id: 1,
        name: 'question1',
        img: '',
        question: '',
        solution: '',
        distractor1: '',
        distractor2: ''
    }
    // ,
    // {
    //     id: '',
    //     name: '',
    //     img: '',
    //     solution: '',
    //     distractor1: '',
    //     distractor2: ''
    // }
]


//Message Board
const nextBtn = document.getElementById('nextBtn')
// nextBtn.addEventListener('click', ()=> {

//     console.log('clicked')
// })

const displayMessage = async (message)=> {
        return new Promise(resolve => {
            setTimeout(() => {
                messageBoard.innerText = message
                resolve()
            }, 50) 
        })

        // setTimeout(() => {
        //     nextBtn.removeAttribute('disabled', '')  
        //     console.log(round, i)          
        // }, 3000)
    // console.log(message)
}

const displayQuestion = async (question)=> {
    const thisQuestion = [question.solution, question.distractor1, question.distractor2]
    // console.log(thisQuestion)

    const answer1 = document.getElementById('answer1')
    const answer2 = document.getElementById('answer2')
    const answer3 = document.getElementById('answer3')

    thisQuestion.sort(() => Math.random() - 0.5)
    thisQuestion.sort(() => Math.random() - 0.5)

    console.log(thisQuestion)
    const answer1Text = thisQuestion[0]
    const answer2Text = thisQuestion[1]
    const answer3Text = thisQuestion[2]


    answer1.innerText = answer1Text
    answer2.innerText = answer2Text
    answer3.innerText = answer3Text



    return new Promise(resolve => {
        setTimeout(() => {
            // messageBoard.innerText = question
            resolve()
        }, 8000) 
    })

    // setTimeout(() => {
    //     nextBtn.removeAttribute('disabled', '')  
    //     console.log(round, i)          
    // }, 3000)
// console.log(message)
}

const round0Play = async ()=> {
    let message = messages[0][1]
    messageBoard.innerText = message.text
    for (let i = 1; i < messages[0].length; i++) {
        message = messages[0][i].text
        await displayMessage(message)
    }
    console.log("end round0")
    nextBtn.removeAttribute('disabled', '')
    nextBtn.addEventListener('click', ()=> {
        round1Play()     
    })
} 



const round1Play = async ()=> {
    console.log('begin round1', messages[1][0].text) 
    board0.classList.add('d-none')
    board1.classList.remove('d-none')
    let message = messages[1][0].text
    messageBoard.innerText = message
    
    for (let i = 0; i < round1Questions.length; i++) {
        const question = round1Questions[i]
        const thisQuestion = round1Questions[i].question
        let img = document.getElementById('round1Img')
        let src = question.src
        let alt = question.solution
        img.setAttribute('src', src)
        img.setAttribute('alt', alt)
        // console.log(question, img)
        await displayQuestion(question)
    }
    // for (let i = 1; i < messages[1].length; i++) {
    //     message = messages[1][i].text
    //     console.log(message)


        // nextBtn.setAttribute('disabled', '')
        // await displayMessage(message)
        //  displayMessage(message)
        // displayMessage(message)

    }
    // nextBtn.removeAttribute('disabled', '')
    // nextBtn.addEventListener('click', ()=> {
    //     console.log('end round1,')
    //     // messageBoard.innerText = messages[1].text 
    //     // nextBtn.setAttribute('disabled', '')      
    // })
// } 



// // Messages
// const messages =  // an array of arrays with objects
//         [
//         // an array of start messages
//             [
//                 {
//                     type: 'start',
//                     id: '1',
//                     name: 'round0StartMsg',
//                     text: 'Bonjour, messieurs et mesdames!  Bienvenue au Coup de Foudre!  Le jeu qui choque!  Je suis Guy Souriard.  Cliquez le bouton bleu pour commencer le jeu.'
//                 },
//                 {
//                     type: 'start',
//                     id: '2',
//                     name: 'round0IntroMsg',
//                     text: 'On a trois candidats qui sont prets de nous montre leur croissance de la France!  Cliquez le bouton rouge pour proposer le premier.'
//                 },
//                 {
//                     type: 'start',
//                     id: '3',
//                     name: 'contestant1Msg',
//                     text: 'Il y a Omar, etudiant en ecole de commerce.  Cliquez le bouton rouge pour presenter la prochaine candidate.'
//                 },
//                 {
//                     type: 'start',
//                     id: '4',
//                     name: 'contestant2Msg',
//                     text: 'Claire parcourt partout dans son role d\'agent de voyage.  Cliquez le bouton rouge pour savoir notre dernier candidat.'
//                 },
//                 {
//                     type: 'start',
//                     id: '5',
//                     name: 'contestant3Msg',
//                     text: 'Et c\'est Dominique qui est aussi dans le monde de divertissements, le best boy d\'une equipe de tournage.  '
//                 }
//                 ,
//                 {
//                     type: 'start',
//                     id: '6',
//                     name: '',
//                     text: 'Au premier tour, les trois vont nommer des monuments de Paris.  Cliquez le bouton rouge pour proposer le premier.'
//                 }
//             ],
//             // an array of round1 messages
//             [
//                 {
//                     type: 'round1',
//                     id: '1',
//                     name: 'round1Intro',
//                     text: 'Au premier tour, les trois vont nommer des monuments de Paris.  Cliquez le bouton rouge pour proposer le premier.'
//                 },
//                 {
//                     type: 'round1',
//                     id: '2',
//                     name: '',
//                     text: ''
//                 },
//                 {
//                     type: 'round1',
//                     id: '3',
//                     name: '',
//                     text: ''
//                 },
//                 {
//                     type: 'round1',
//                     id: '4',
//                     name: '',
//                     text: ''
//                 },
//                 {
//                     type: 'round1',
//                     id: '5',
//                     name: '',
//                     text: ''
//                 },
//                 {
//                     type: 'round1',
//                     id: '6',
//                     name: '',
//                     text: ''
//                 },
//                 {
//                     type: 'round1',
//                     id: '7',
//                     name: '',
//                     text: ''
//                 },
//                 {
//                     type: 'round1',
//                     id: '8',
//                     name: '',
//                     text: ''
//                 }
//             ],
//             [

//             ]
//         ]



// Change from individual strings to objects to be able to loop through a series of messages by using setInterval()
// Object properties
/**
 // messageType
 *      start message
        round1 message
        contestant message
        question message
        right answer message
        wrong answer message
        end message
        restart message
        
        const messages = [ // an array of arrays with objects 
            // an array of round1 messages
            [
                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                },
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                },
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                },
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                }

            ], 
            // an array of contestant messages
            [
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                },
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                },
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                },
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                }
            ], 
            // an array of question messages
            [
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                },
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                },
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                },
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                }
            ], 
            // an array of right answer messages
            [
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                },
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                },
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                }
            ],
            // an array of wrong answer messages
            [
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                },
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                },
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                }
            ], 
            // an array of end messages
            [
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                }
            ], 
            // an array of restart messages
            [
                                {
                    type: '',
                    id: '1',
                    name: '',
                    text: ''
                },
                {
                    type: '',
                    id: '2',
                    name: ''
                    text: ''
                }
            ] 
        ]
        
        */


// Round 1 question 1-5 messages
// Correct answer message
// Wrong answer message
// Introduce next round message
// Round 2 start message
// Round 2 question 1-8 messages
// Round 3 start message
// Round 3 question 1-6 messages
// Game winner message
// Game over message
// Restart game message





// Gameboard
const board0 = document.getElementById('board0')
const board1 = document.getElementById('board1')
const board2 = document.getElementById('board2')
const board3 = document.getElementById('board3')

const round0Img = document.getElementById('round0Img')
round0Img.setAttribute('src', `media/coup_de_foudre.gif`)
// round1Img.setAttribute('src', `media/${round1Questions[0].img}`)
board0.classList.add('d-none')

// Contestants
const contestant1 = document.getElementById('name1')
const contestant2 = document.getElementById('name2')
const contestant3 = document.getElementById('name3')

contestant1.innerText = `Omar`
contestant2.innerText = `Claire`
contestant3.innerText = `Dominique`



// Scores
let score1 = 0
let score2 = 0
let score3 = 0

const scoreboard1 = document.getElementById('score1')
const scoreboard2 = document.getElementById('score2')
const scoreboard3 = document.getElementById('score3')

scoreboard1.innerText = score1
scoreboard2.innerText = score2
scoreboard3.innerText = score3


const messageBoard = document.getElementById('messageBoard')
messageBoard.innerText = messages[0][0].text
// console.log("messages[0].text", messages[0].text)


// Start game
const start = document.getElementById('start')
start.addEventListener('click', ()=>{ 
    messageBoard.innerText = messages[0][0].text
    // console.log(messages[0][0].text)
    board0.classList.remove('d-none')
    round0Play()
})


// console.log("messageBoard.innerText",messageBoard.innerText)
console.log('end of code')