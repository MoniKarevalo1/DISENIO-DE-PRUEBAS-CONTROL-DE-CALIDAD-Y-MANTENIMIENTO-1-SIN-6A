from pyDOE3 import fullfact
from allpairspy import AllPairs

# Definición de factores y niveles
resoluciones = ["360p", "480p", "720p", "1080p", "4K"]
sistemas = ["Windows", "Linux", "macOS", "Android", "iOS"]
navegadores = ["Chrome", "Firefox", "Safari", "Edge", "App móvil"]
usuarios = ["10", "50", "100"]
redes = ["WiFi", "4G", "5G", "Ethernet"]

# -------------------------------
# Sección 1: Diseño factorial completo
# -------------------------------
# Cada número representa un nivel de un factor
design = fullfact([len(resoluciones),
                   len(sistemas),
                   len(navegadores),
                   len(usuarios),
                   len(redes)])

# -------------------------------
# Sección 2: Pairwise testing
# -------------------------------
factors = [resoluciones, sistemas, navegadores, usuarios, redes]
pairwise_cases = list(AllPairs(factors))

# -------------------------------
# Guardar resultados en resultados.txt
# -------------------------------
with open("resultados.txt", "w", encoding="utf-8") as f:
    f.write("=== Diseño factorial completo (PyDOE3) ===\n")
    f.write(f"Número de casos: {len(design)}\n")
    f.write(str(design) + "\n\n")

    f.write("=== Casos de prueba pairwise (AllPairs) ===\n")
    f.write(f"Número de casos: {len(pairwise_cases)}\n")
    for i, case in enumerate(pairwise_cases, 1):
        f.write(f"Test {i}: {{'Resolución': '{case[0]}', "
                f"'Sistema Operativo': '{case[1]}', "
                f"'Navegador/App': '{case[2]}', "
                f"'Usuarios Concurrentes': '{case[3]}', "
                f"'Red': '{case[4]}'}}\n")
