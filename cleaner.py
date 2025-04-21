import re


def limpar_tags_arquivo(caminho_arquivo):
    texto_limpo = ""
    with open(caminho_arquivo, "r", encoding="utf-8") as f:
        for line in f:
            line_limpa = re.sub(r"<.*?>", "", line)
            texto_limpo += line_limpa
    return texto_limpo


def limpar_tags_texto(texto):
    return re.sub(r"<.*?>", "", texto)

