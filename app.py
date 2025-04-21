from flask import Flask, render_template, request, url_for
from cleaner import limpar_tags_texto
from image_generator import random_image

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    resultado = ""
    if request.method == "POST":
        texto_original = request.form["input_text"]
        resultado = limpar_tags_texto(texto_original)
    return render_template("index.html", resultado=resultado)

@app.route("/easteregg")
def easteregg():
    cat_image = random_image()
    if cat_image:
        image_path = f"cats/{cat_image}"
    else:
        image_path = None
    
    return render_template("easteregg.html", cat_image=image_path)

@app.route("/get-cat")
def get_cat():
    cat = random_image()
    if cat:
        return {
            'image': url_for('static', filename=f'cats/{cat}')
        }
    return {'image': None}

if __name__ == "__main__":
    app.run(debug=True)