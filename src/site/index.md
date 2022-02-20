---
title: Yueh-Han's Microblog
layout: default
---

This site is **generated** from a telegram chat ⚙️. When I send a
This project could work as a *journal, quote collection, bookmark, or microblog*. 

<center class='noStyle'>
<a href='https://app.netlify.com/sites/bmk/deploys'>
<img src='https://api.netlify.com/api/v1/badges/8f688436-973d-4ab9-be07-d4013ccaf8fe/deploy-status'></img>
 </a>
 </center>



{%- for type, arr in sheet -%}
  <h3>{{ type | capitalize }}</h3>

  <ul class="listing">
  {% if type =='Link' %}
  {%- for item in sheet.Link | reverse -%}
    <li><a href={{item.text}} target="_blank">{{ item.text }} </a> <span> - {{ item.time }}<span> </li>
    {%- endfor -%}
  {% endif %}
  {% if type!= 'Link' %}
    {%- for item in arr | reverse -%}
    <li>{{ item.text }}<span> - {{ item.time }}<span></li>
    {%- endfor -%}
  {% endif %}
</ul>
{%- endfor -%}

<br>

---





> Made by [Yueh Han Huang](yhhuang.me) 🌱  | [View Github Repo](https://github.com/Bojne/microblog)

<details>
<summary> <b>View Technology Stack:</b> </summary>
  
<ul class='listing'>
  <li>Telegram: Input interface</li>  
  <li>Google Sheets: The editable database </li>
  <li>Netlify: Deployment</li>
  <li>Eleventry: Site generator</li>
</ul>

</details>

<center>
<a href='https://app.netlify.com/start/deploy?repository=https://github.com/Bojne/microblog'>
<img src='https://www.netlify.com/img/deploy/button.svg'></img>
 </a>
 </center>




