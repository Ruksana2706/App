
from flask import Flask, request, jsonify

app = Flask(__name__)

# Helper function to process the input data
def process_data(data):
    numbers = []
    alphabets = []
    highest_lowercase = []

    for item in data:
        if item.isdigit():
            numbers.append(item)
        elif item.isalpha():
            alphabets.append(item)
            if item.islower():
                if not highest_lowercase or item > highest_lowercase[0]:
                    highest_lowercase = [item]

    return numbers, alphabets, highest_lowercase

# POST endpoint to handle data processing
@app.route('/bfhl', methods=['POST'])
def handle_post():
    try:
        # Parse JSON request
        input_data = request.json.get("data", [])
        
        # Process data to separate numbers and alphabets
        numbers, alphabets, highest_lowercase = process_data(input_data)
        
        # Prepare response
        response = {
            "is_success": True,
            "user_id": "john_doe_17091999",  # Replace with actual user_id logic
            "email": "john@xyz.com",         # Replace with actual email
            "roll_number": "ABCD123",        # Replace with actual roll number
            "numbers": numbers,
            "alphabets": alphabets,
            "highest_lowercase_alphabet": highest_lowercase
        }
        
        return jsonify(response), 200
    
    except Exception as e:
        # Handle exceptions and return a failure response
        return jsonify({"is_success": False, "error": str(e)}), 400

# GET endpoint to return a hardcoded operation code
@app.route('/bfhl', methods=['GET'])
def handle_get():
    return jsonify({"operation_code": 1}), 200

if __name__ == "__main__":
    app.run(debug=True)
