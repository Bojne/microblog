---
title: Google Sheets ➡️ Site 
layout: default
---

> Build with Netlify, Eleventry, Telegram and Google Sheet API
### Text
<ul class="listing">
{%- for item in sheet.Text -%}
  <li>{{ item.time }} - {{ item.message }}</li>
{%- endfor -%}
</ul>

### Links
<ul class="listing">
{%- for item in sheet.Link -%}
  <li>{{ item.time }} - {{ item.message }}</li>
{%- endfor -%}
</ul>


<br>
<br>
<br>

Made by [Yueh Han Huang](https://yhhuang.me) 🌱