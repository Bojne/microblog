---
title: Google Sheets ➡️ Site. (With Eleventy)
layout: default
---



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