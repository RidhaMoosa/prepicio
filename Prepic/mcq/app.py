from flask import Flask, render_template

app = Flask(__name__)

mcq_questions = {
    "question1": {
        "question": ["Solve for x: 2x + 5 = 17"],
        "answers": {
            "A": ["x = 6"],
            "B": ["x = 7"],
            "C": ["x = 8"],
            "D": ["x = 9"]
        },
        "correct_answer": "B",
        "explanation": [
            "Step 1: Subtract 5 from both sides:",
            "2x + 5 - 5 = 17 - 5",
            "2x = 12",
            "Step 2: Divide both sides by 2:",
            "2x / 2 = 12 / 2",
            "x = 6"
        ]
    },
    "question2": {
        "question": ["Find the vertex of the parabola y = x^2 - 4x + 3"],
        "answers": {
            "A": ["(2, 1)"],
            "B": ["(1, -2)"],
            "C": ["(2, -1)"],
            "D": ["(1, 2)"]
        },
        "correct_answer": "A",
        "explanation": [
            "Step 1: Complete the square by adding and subtracting (4/2)^2 = 4:",
            "y = x^2 - 4x + 4 - 4 + 3",
            "Step 2: Factor the perfect square trinomial:",
            "y = (x - 2)^2 - 1",
            "Step 3: The vertex is (h, k), where h is the x-coordinate of the vertex and k is the y-coordinate:",
            "Vertex = (2, -1)"
        ]
    },
    "question3": {
        "question": ["What is the limit of (3x^2 - 2x + 1) / (x - 1) as x approaches 1?"],
        "answers": {
            "A": ["3"],
            "B": ["4"],
            "C": ["2"],
            "D": ["1"]
        },
        "correct_answer": "C",
        "explanation": [
            "Step 1: Factor the numerator:",
            "3x^2 - 2x + 1 = (3x - 1)(x - 1)",
            "Step 2: Cancel out the common factor (x - 1):",
            "(3x - 1)(x - 1) / (x - 1)",
            "3x - 1",
            "Step 3: Substitute x = 1:",
            "3(1) - 1 = 2"
        ]
    }
    # Add more questions here
}

@app.route('/')
def index():
    return render_template('index.html', questions=mcq_questions)

if __name__ == '__main__':
    app.run(debug=True)
