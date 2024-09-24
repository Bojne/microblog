---
title: Yueh-Han's Microblog
layout: default
---

Experimenting: "build website with simple telegram message." [Source Code](https://github.com/Bojne/microblog). 

<center class='noStyle'>
  <a href='https://app.netlify.com/sites/bmk/deploys'>
    <img src='https://api.netlify.com/api/v1/badges/8f688436-973d-4ab9-be07-d4013ccaf8fe/deploy-status'></img>
  </a>
  </> 
  <img src="https://deploy-badge.vercel.app/vercel/bmk-telegram" alt="Vercel Deploy"></img>
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


> Developed by [Yueh Han Huang](https://bojne.com)


<center>
<a href='https://app.netlify.com/start/deploy?repository=https://github.com/Bojne/microblog'>
<img src='https://www.netlify.com/img/deploy/button.svg'></img>
 </a>
 </center>




