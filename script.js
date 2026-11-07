
const question = [
    {
        question: "What is Retrieval-Augmented Generation (RAG) mainly used for in AI?",
        Option: [
            "Making AI generate images faster",
            "Connecting AI to external knowledge sources",
            "Reducing a model's parameter count",
            "Training robots to walk",
        ],
        answer: 1,
    },
    {
        question: "What does a Mixture of Experts (MoE) architecture do?",
        Option: [
            "Activates selected expert networks for each input",
            "Converts text directly into computer hardware",
            "Uses only one neural network for every task",
            "Removes neural networks from the model",
        ],
        answer: 0,
    },
    {
        question: "What is a Neural Radiance Field (NeRF) designed to create?",
        Option: [
            "A 3D scene representation from 2D images",
            "A speech-to-text transcription system",
            "A searchable text database",
            "A network security firewall",
        ],
        answer: 0,
    },
];

const quizcontainer = document.getElementById("quiz-container");
const showBtn = document.getElementById("show-btn");

function displayQuestions() {

    quizcontainer.innerHTML = "";

    for (let i = 0; i < question.length; i++) {

        const currentQuestion = question[i];

        const questionBox = document.createElement("div");
        questionBox.className = "question-box";

        const questionHeading = document.createElement("h3");
        questionHeading.textContent = currentQuestion.question;

        questionBox.appendChild(questionHeading);

        for (let j = 0; j < currentQuestion.Option.length; j++) {

            const label = document.createElement("label");
            label.className = "option";

            const radio = document.createElement("input");

            radio.type = "radio";
            radio.name = "question" + i;
            radio.value = j;

            const optionText = document.createTextNode(
                currentQuestion.Option[j]
            );

            label.appendChild(radio);
            label.appendChild(optionText);

            questionBox.appendChild(label);
        }

        quizcontainer.appendChild(questionBox);
    }
}


// Check answers

function checkAnswers() {

    let score = 0;

    for (let i = 0; i < question.length; i++) {

        const selectedAnswer = document.querySelector(
            'input[name="question' + i + '"]:checked'
        );

        if (selectedAnswer === null) {
            alert("Please answer all questions!");
            return;
        }

        if (Number(selectedAnswer.value) === question[i].answer) {
            score++;
        }
    }

    quizcontainer.innerHTML +=
        "<h2>Your Score: " + score + " / " + question.length + "</h2>";

    showBtn.disabled = true;
}


// Button click

showBtn.addEventListener("click", checkAnswers);


// Display questions

displayQuestions();
