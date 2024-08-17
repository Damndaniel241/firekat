import os
import re

# Path to the output folder
output_folder = './src/subpages/'  # Change this to the desired child folder name

text = '''
</RouterLink><RouterLink>Politics,</RouterLink><RouterLink>&nbsp;Crime,</RouterLink>
<RouterLink>&nbsp;Romance,</RouterLink><RouterLink>&nbsp;Jobs/Vacancies,</RouterLink><RouterLink>&nbsp;Career,</RouterLink>
<RouterLink>&nbsp;Business,</RouterLink><RouterLink>&nbsp;Investment,</RouterLink><RouterLink>&nbsp;Nysc,</RouterLink>
<RouterLink>&nbsp;Education,</RouterLink><RouterLink>&nbsp;Autos,</RouterLink><RouterLink>&nbsp;Car Talk,</RouterLink>
<RouterLink>&nbsp;Properties,</RouterLink><RouterLink>&nbsp;Health,</RouterLink><RouterLink>&nbsp;Travel,</RouterLink>
<RouterLink>&nbsp;Family,</RouterLink><RouterLink>&nbsp;Culture,</RouterLink><RouterLink>&nbsp;Religion,</RouterLink>
<RouterLink>&nbsp;Food,</RouterLink><RouterLink>&nbsp;Diaries,</RouterLink><RouterLink>&nbsp;Nairaland Ads,</RouterLink>
<RouterLink>&nbsp;Pets,</RouterLink><RouterLink>&nbsp;Agriculture</RouterLink>
'''

pattern = r'<RouterLink>&nbsp;(\w+),</RouterLink>'
matches = re.findall(pattern, text)

# Create the output folder if it doesn't exist
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

for match in matches:
    capitalized_match = match.capitalize()
    vue_filename = f'{output_folder}/{capitalized_match}.vue'  # Specify the output folder path
    with open(vue_filename, 'w') as vue_file:
            # js_file.write(f"import React from 'react';\nimport {{ RouterLink }} from 'react-router-dom';\n\nfunction {capitalized_match}() {{\n  return (\n    <div>{capitalized_match}</div>\n  );\n}}\n\nexport default {capitalized_match};")
            vue_file.write(f"<script setup lang='ts'>\n\n</script>\n\n\n<template>\n<h1 class='font-bold'>This is {capitalized_match} page</h1>\n</template>")
    print(f'Created {vue_filename}')
