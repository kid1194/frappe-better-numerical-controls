# Frappe Better Numerical Controls
A small plugin for Frappe that adds the support of customizations to the numerical controls.

### Table of Contents
<ul>
    <li><a href="#requirements">Requirements</a></li>
    <li>
        <a href="#setup">Setup</a>
        <ul>
            <li><a href="#install">Install</a></li>
            <li><a href="#update">Update</a></li>
            <li><a href="#uninstall">Uninstall</a></li>
        </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#available-options">Available Options</a></li>
    <li><a href="#supported-fields">Supported Fields</a></li>
    <li><a href="#license">License</a></li>
</ul>

---

### Requirements
- Frappe >= v13.0.0

---

### Setup

#### Install
1. Get the plugin from Github

*(Required only once)*

`bench get-app https://github.com/kid1194/frappe-better-numerical-controls`

2. Install the plugin on any instance/site you want

`bench --site [sitename] install-app frappe_better_numerical_controls`

3. Check the usage section below

#### Update
1. Go to the app directory (frappe-bench/apps/frappe_better_numerical_controls) and execute:

`git pull`

2. Go back to the frappe-bench directory and execute:

`bench --site [sitename] migrate`

3. *In case you need to restart bench, execute:*

`bench restart`

#### Uninstall
1. Uninstall the plugin from the instance/site

`bench --site [sitename] uninstall-app frappe_better_numerical_controls`

2. Uninstall the plugin from bench

`bench remove-app frappe_better_numerical_controls`

---

### Usage
1. Go to Customization > Customize Form
2. Enter the form type/name (Ex: 'User')
3. Scroll down to the form fields area and edit the numerical fields like `Int` that you want
4. In the `options` property of the fields, add a JSON object of the customizations you want. Example: `{"min": 10}`

---

### Available Options
<table>
    <tr>
        <td><code>min</code></td>
        <td>
            <p>The minimum number allowed.</p>
            <p><i>Examples:</i></p>
            <p><i>- Int: <code>10</code></i></p>
            <p><i>- Float: <code>10.5</code></i></p>
        </td>
    </tr>
    <tr>
        <td><code>max</code></td>
        <td>
            <p>The maximum number allowed.</p>
            <p><i>Examples:</i></p>
            <p><i>- Int: <code>100</code></i></p>
            <p><i>- Float: <code>100.5</code></i></p>
        </td>
    </tr>
    <tr>
        <td><code>divisible_by</code></td>
        <td>
            <p>The number that the value must be divisible by.</p>
            <p><i>Examples:</i></p>
            <p><i>- Int: <code>5</code></i></p>
            <p><i>- Float: <code>5.5</code></i></p>
        </td>
    </tr>
    <tr>
        <td><code>min_field</code></td>
        <td>
            <p>The fieldname that holds the minimum number allowed.</p>
            <p><i>Example: <code>"min_price"</code></i></p>
        </td>
    </tr>
    <tr>
        <td><code>max_field</code></td>
        <td>
            <p>The fieldname that holds the maximum number allowed.</p>
            <p><i>Example: <code>"max_price"</code></i></p>
        </td>
    </tr>
</table>

---

### Supported Fields
- Int
- Float
- Currency

---

### License
MIT
