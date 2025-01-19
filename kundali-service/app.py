from flask import Flask, request, jsonify
from flask_cors import CORS
import swisseph as swe
import datetime

app = Flask(__name__)
CORS(app)

# Function to calculate planetary positions and generate Kundali
def generate_kundali(dob, time_of_birth, city, state):
    # Convert date of birth and time of birth to datetime object
    birth_datetime = datetime.datetime.strptime(f"{dob} {time_of_birth}", "%Y-%m-%d %H:%M")
    
    # Swiss Ephemeris requires Julian Day (JD), we calculate it based on the birth datetime
    jd_ut = swe.julday(birth_datetime.year, birth_datetime.month, birth_datetime.day, 
                       birth_datetime.hour + birth_datetime.minute / 60.0)
    
    # Calculate the positions of planets
    planets = {
        "Sun": swe.calc(jd_ut, swe.SUN)[0],
        "Moon": swe.calc(jd_ut, swe.MOON)[0],
        "Mercury": swe.calc(jd_ut, swe.MERCURY)[0],
        "Venus": swe.calc(jd_ut, swe.VENUS)[0],
        "Mars": swe.calc(jd_ut, swe.MARS)[0],
        "Jupiter": swe.calc(jd_ut, swe.JUPITER)[0],
        "Saturn": swe.calc(jd_ut, swe.SATURN)[0],
        "Uranus": swe.calc(jd_ut, swe.URANUS)[0],
        "Neptune": swe.calc(jd_ut, swe.NEPTUNE)[0],
        "Pluto": swe.calc(jd_ut, swe.PLUTO)[0],
    }
    
    # Additional astrological calculations can be added for houses, ascendant, etc.

    kundali = {
        "name": request.json.get("name"),
        "dob": dob,
        "time_of_birth": time_of_birth,
        "city": city,
        "state": state,
        "planets": planets
    }

    return kundali

# API route to accept user data and return Kundali
@app.route('/generate_kundali', methods=['POST'])
def generate_kundali_api():
    # Extract user data from the request
    user_data = request.json

    name = user_data.get('name')
    dob = user_data.get('dob')  # e.g., "1990-01-01"
    time_of_birth = user_data.get('time_of_birth')  # e.g., "15:30"
    gender = user_data.get('gender')
    state = user_data.get('state')
    city = user_data.get('city')

    if not (dob and time_of_birth and name):
        return jsonify({"error": "Missing required fields"}), 400
    
    # Generate Kundali based on user data
    kundali = generate_kundali(dob, time_of_birth, city, state)
    
    # Return Kundali data as JSON
    return jsonify(kundali)

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
