# Frappe Better Numerical Controls

A small plugin for Frappe that adds the support of customizations to the numerical controls.

---

### Table of Contents
- [Requirements](#requirements)
- [Setup](#setup)
  - [Install](#install)
  - [Update](#update)
  - [Uninstall](#uninstall)
- [Usage](#usage)
- [Available Options](#available-options)
- [Supported Fields](#supported-fields)
- [Issues](#issues)
- [License](#license)

---

### Requirements
- Frappe >= v12.0.0

---

### Setup

⚠️ *Important* ⚠️

*Do not forget to replace [sitename] with the name of your site in all commands.*

#### Install
1. Go to bench directory

```
cd ~/frappe-bench
```

2. Get plugin from Github

*(Required only once)*

```
bench get-app https://github.com/kid1194/frappe-better-numerical-controls
```

3. Build plugin

*(Required only once)*

```
bench build --app frappe_better_numerical_controls
```

4. Install plugin on a specific site

```
bench --site [sitename] install-app frappe_better_numerical_controls
```

5. Check the [usage](#usage) section below

#### Update
1. Go to app directory

```
cd ~/frappe-bench/apps/frappe_better_numerical_controls
```

2. Get updates from Github

```
git pull
```

3. Go to bench directory

```
cd ~/frappe-bench
```

4. Build plugin

```
bench build --app frappe_better_numerical_controls
```

5. Update a specific site

```
bench --site [sitename] migrate
```

6. (Optional) Restart bench

```
bench restart
```

#### Uninstall
1. Go to bench directory

```
cd ~/frappe-bench
```

2. Uninstall plugin from a specific site

```
bench --site [sitename] uninstall-app frappe_better_numerical_controls
```

3. Remove plugin from bench

```
bench remove-app frappe_better_numerical_controls
```

4. (Optional) Restart bench

```
bench restart
```

---

### Usage
1. Go to Customization > Customize Form
2. Enter the form type/name (Ex: 'User')
3. Scroll down to the form fields area and create an **Int**, **Float** or **Currency** field or edit an existing custom field
4. In the **options** property of the field, add a JSON object of the customizations you want. Example:
```
{"min": 10, "max": 100}
```

ℹ️ **Note: You can't modify the original fields of a doctype, so create a new field or clone and modify the entire doctype.**

---

### Available Options

| Option | Description |
| :--- | :--- |
| `min` | The minimum number allowed.<br/><br/>- Example:<br/>-- Int: `10`<br/>-- Float: `10.5` |
| `max` | The maximum number allowed.<br/><br/>- Example:<br/>-- Int: `100`<br/>-- Float: `100.5` |
| `divisible_by` | The number that the value must be divisible by. ⚠️ Only for Int fields.<br/><br/>- Example: `5` |
| `min_field` | The name of the field that holds the minimum number allowed.<br/><br/>- Example: `min_price` |
| `max_field` | The name of the field that holds the maximum number allowed.<br/><br/>- Example: `max_price` |

**The checking order is as follows: max_field, min_field, divisible_by, max, min.**

---

### Supported Fields
- Int
- Float
- Currency

---

### Issues
If you find bug in the plugin, please create a [bug report](https://github.com/kid1194/frappe-better-numerical-controls/issues/new?assignees=kid1194&labels=bug&template=bug_report.md&title=%5BBUG%5D) and let us know about it.

---

### License
This repository has been released under the [MIT License](https://github.com/kid1194/frappe-better-numerical-controls/blob/main/LICENSE).