$(document).ready(function () {
    var currentQuestion = 0;
    var questions = [
        {
            question: "Solve for x: 2x + 5 = 17",
            choices: {
                "A": "x = 6",
                "B": "x = 7",
                "C": "x = 8",
                "D": "x = 9"
            },
            correct_answer: "B",
            explanation: [
                "Step 1: Subtract 5 from both sides:",
                "2x + 5 - 5 = 17 - 5",
                "2x = 12",
                "Step 2: Divide both sides by 2:",
                "2x / 2 = 12 / 2",
                "x = 6"
            ]
        },
        {
            question: "Find the vertex of the parabola y = x^2 - 4x + 3",
            choices: {
                "A": "(2, 1)",
                "B": "(1, -2)",
                "C": "(2, -1)",
                "D": "(1, 2)"
            },
            correct_answer: "A",
            explanation: [
                "Step 1: Complete the square by adding and subtracting (4/2)^2 = 4:",
                "y = x^2 - 4x + 4 - 4 + 3",
                "Step 2: Factor the perfect square trinomial:",
                "y = (x - 2)^2 - 1",
                "Step 3: The vertex is (h, k), where h is the x-coordinate of the vertex and k is the y-coordinate:",
                "Vertex = (2, -1)"
            ]
        },
        {
            question: "What is the limit of (3x^2 - 2x + 1) / (x - 1) as x approaches 1?",
            choices: {
                "A": "3",
                "B": "4",
                "C": "2",
                "D": "1"
            },
            correct_answer: "C",
            explanation: [
                "Step 1: Factor the numerator:",
                "3x^2 - 2x + 1 = (3x - 1)(x - 1)",
                "Step 2: Cancel out the common factor (x - 1):",
                "(3x - 1)(x - 1) / (x - 1)",
                "3x - 1",
                "Step 3: Substitute x = 1:",
                "3(1) - 1 = 2"
            ]
        }
        // Add more questions here
    ];

    function loadQuestion(questionIndex) {
        var questionData = questions[questionIndex];
        $(".question").text(questionData.question);

        var choicesList = $(".choices").empty();
        for (var choice in questionData.choices) {
            choicesList.append("<li class='choice-card' data-choice='" + choice + "'>" + questionData.choices[choice] + "</li>");
        }

        $(".explanation").html("").hide();
        $(".choice-card").removeClass("correct incorrect selected-correct");
        $(".progress-indicator select").val(questionIndex);
    }

    function showHint(explanation, hintIndex) {
        var hint = explanation[hintIndex];
        $(".explanation").append(hint + "<br>").show();
    }

    $(".choices").on("click", ".choice-card", function () {
        var selectedChoice = $(this).attr("data-choice");
        var correctChoice = questions[currentQuestion].correct_answer;

        $(".choice-card").removeClass("correct incorrect");
        $(this).addClass(selectedChoice === correctChoice ? "correct selected-correct" : "incorrect");
        $(this).removeClass("hovered");

        if (selectedChoice === correctChoice) {
            var $questionContainer = $(this).closest(".question-container");
            $questionContainer.find(".explanation").html(questions[currentQuestion].explanation.join("<br>")).show();
        }


    });

    $(".hint-btn").click(function () {
        var explanation = questions[currentQuestion].explanation;
        var hintIndex = $(".explanation").html().split("<br>").length - 1;

        if (hintIndex < explanation.length) {
            showHint(explanation, hintIndex);
        }
    });

    $(".back-btn").click(function () {
        if (currentQuestion > 0) {
            currentQuestion--;
            loadQuestion(currentQuestion);
        }
    });

    $(".next-btn").click(function () {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion(currentQuestion);
        }
    });

    $(".progress-indicator select").change(function () {
        currentQuestion = parseInt($(this).val(), 10);
        loadQuestion(currentQuestion);
    });

    loadQuestion(currentQuestion);
});
