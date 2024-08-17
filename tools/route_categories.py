import os
import re

# Path to the output folder
output_folder = './src/subpages/'  # Change this to the desired child folder name


component_names = []


text = '''
</Link><Link>Politics,</Link><Link>&nbsp;Crime,</Link>
<Link>&nbsp;Romance,</Link><Link>&nbsp;Jobs/Vacancies,</Link><Link>&nbsp;Career,</Link>
<Link>&nbsp;Business,</Link><Link>&nbsp;Investment,</Link><Link>&nbsp;Nysc,</Link>
<Link>&nbsp;Education,</Link><Link>&nbsp;Autos,</Link><Link>&nbsp;Car Talk,</Link>
<Link>&nbsp;Properties,</Link><Link>&nbsp;Health,</Link><Link>&nbsp;Travel,</Link>
<Link>&nbsp;Family,</Link><Link>&nbsp;Culture,</Link><Link>&nbsp;Religion,</Link>
<Link>&nbsp;Food,</Link><Link>&nbsp;Diaries,</Link><Link>&nbsp;Nairaland Ads,</Link>
<Link>&nbsp;Pets,</Link><Link>&nbsp;Agriculture</Link>
'''

pattern = r'<Link>&nbsp;(\w+),</Link>'
matches = re.findall(pattern, text)
output_file = 'routes.txt'


for match in matches:
    capitalized_match = match.capitalize()
    component_names.append(capitalized_match)
  
route_elements = []
for component_name in component_names:
    # route_element = f'<Route path="/{component_name.lower()}" element={{<{component_name} />}} />'
    route_element = f"{{path:'/{component_name.lower()}', name:'{component_name}', component: () => import('@/categories/{component_name}.vue')}},"
    route_elements.append(route_element)

# route_import = []
# for component_name in component_names:
#     route_import_element = f"import {component_name} from './{component_name};' "
#     route_import.append(route_import_element)

# Create the output text file
with open(output_file, 'w') as file:
    file.write('\n'.join(route_elements))

# with open(output_file,'a') as file:
#     file.write('\n'.join(route_import))     

print(f'Routes written to {output_file}')