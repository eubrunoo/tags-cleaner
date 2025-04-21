import os
import random as r

def random_image():
    try:
        archives = os.listdir("static/cats")
        image_files = [f for f in archives if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif'))]
        
        if not image_files:
            raise FileNotFoundError("Nenhuma imagem encontrada na pasta")
            
        return r.choice(image_files)
    except FileNotFoundError as e:
        print(f"Erro: {e}")
        return None