import os
import sys
# DON'T CHANGE THIS !!!
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from flask import Flask, jsonify
from flask_cors import CORS
from src.models.user import db
from src.routes.user import user_bp

app = Flask(__name__)
app.config['SECRET_KEY'] = 'asdf#FGSgvasgf$5$WGT'

# Configure CORS for frontend domain
CORS(app, origins=[
    "https://nazaaliyeva.com",
    "https://www.nazaaliyeva.com", 
    "http://localhost:5173",  # For development
    "http://localhost:3000"   # Alternative dev port
])

app.register_blueprint(user_bp, url_prefix='/api')

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(__file__), 'database', 'app.db')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
with app.app_context():
    db.create_all()

@app.route('/')
def health_check():
    return jsonify({
        "status": "healthy",
        "message": "Naza Aliyeva API is running",
        "version": "1.0.0"
    })

@app.route('/api/health')
def api_health():
    return jsonify({
        "status": "healthy",
        "database": "connected",
        "message": "API is operational"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

