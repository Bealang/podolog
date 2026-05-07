with open('galeria.html', 'rb') as f:
    content = f.read()
    # print lines 130 to 150
    lines = content.splitlines()
    for i in range(130, 150):
        print(f"{i+1}: {repr(lines[i])}")
