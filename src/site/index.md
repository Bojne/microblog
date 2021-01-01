---
title: Telegram Message ➡️ Site  
layout: default
---

This site is **generated** from a telegram chat ⚙️. When I send a message to the chat, this [Google sheet](https://docs.google.com/spreadsheets/d/1smw4NS-wkU4qj0Gp2BbTJO5CCeBpms1GnYXYdejsvJg/edit#gid=0) gets updated. And then, [Netlify](netlify.com) runs my source code to retrieve the data from sheet, build this site with queried data, and deploy it so it can be accessed online as [bookmarked.netlify.com](bookmarked.netlify.com). 

The process above is fully automated 🔁. **It makes the documentation process more convinent** - as messaging app was easy to save instant idea, but hard to view. 

This project could work as a *journal, quote collection, bookmark, or microblog*. 


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





> Made by [Yueh Han Huang](yhhuang.me) 🌱  | [View Github Repo](https://github.com/Bojne/telegram-to-site)

<details>
<summary> <b>View Technology Stack:</b> </summary>
  
<ul class='listing'>
  <li>Telegram: Input interface</li>  
  <li>Google Sheets: The editable database </li>
  <li>Google Script: Connect Telegram with google sheet</li>  
  <li>Netlify: Deployment</li>
  <li>Eleventry: Site generator</li>
  <li>Zapier: Connect the Google Sheet with Netlify project</li>
</ul>

</details>



