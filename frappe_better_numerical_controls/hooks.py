# Frappe Better Numerical Controls © 2022
# Author:  Ameen Ahmed
# Company: Level Up Marketing & Software Development Services
# Licence: Please refer to LICENSE file


from . import __version__ as app_version
from frappe import __version__ as frappe_version


app_name = "frappe_better_numerical_controls"
app_title = "Frappe Better Numerical Controls"
app_publisher = "Ameen Ahmed (Level Up)"
app_description = "Frappe numerical controls that supports customization."
app_icon = "octicon octicon-plus"
app_color = "blue"
app_email = "kid1194@gmail.com"
app_license = "MIT"


is_frappe_above_v13 = int(frappe_version.split('.')[0]) > 13


app_include_js = [
    'better_int.bundle.js',
    'better_float.bundle.js'
] if is_frappe_above_v13 else [
    '/assets/frappe_better_numerical_controls/js/better_int.js',
    '/assets/frappe_better_numerical_controls/js/better_float.js'
]