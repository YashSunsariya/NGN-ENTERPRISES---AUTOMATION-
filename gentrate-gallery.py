import os

gallery_path = "gallery"   # folder where your images are stored
output_file = "gallery_output.html"

valid_ext = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]

files = sorted([f for f in os.listdir(gallery_path) if os.path.splitext(f)[1] in valid_ext])

html = "<div class='gallery-grid'>\n"

for f in files:
    html += f"  <img src='gallery/{f}' alt='Project Photo'>\n"

html += "</div>"

with open(output_file, "w") as out:
    out.write(html)

print(f"Generated {output_file} with {len(files)} images!")
