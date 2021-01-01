---
title: Telegram Message ➡️ Site 
layout: default
---

> Build with Netlify, Eleventry, Telegram API, Google Sheet API and Zapier. 
> [Github Repo](https://github.com/Bojne/telegram-to-site)


<details>
<summary>How does this work?</summary>
  
<ol class='listing'>
  <li>I send a message to telegram bot</li>
  <li>The updated the database (i.e. a Google sheet) (via webhooks & google app script)</li>
  <li>The updates in database triggers a new project deployment ( [Netlify](netlify.com) and Zapier)</li>
  <li>The project fetch in info in google sheet and regenerate site (generated via eleventry)</li>
  <li>New site is live! (deployed with Netlify)</li>
</ol>

</details>




### Text
<ul class="listing">
{%- for item in sheet.Text -%}
  <li>{{ item.message }}<span> - {{ item.time }}<span></li>
{%- endfor -%}
</ul>

### Links
<ul class="listing">
{%- for item in sheet.Link -%}
  <li><a href={{item.message}} target="_blank">{{ item.message }} </a> <span> - {{ item.time }}<span> </li>
{%- endfor -%}
</ul>


<br>

---


