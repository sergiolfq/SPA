

## SPA Application  using vue-router, and vue-i18n  

This Laravel SPA displays two charts in dfferent sections and allows you to switch between languages ( English and French):

## Vue components: 
- MainMenu.vue : this one contains the call to router and displays link to each section, it also has a standar selection.
- MonthlyReport , AnnualReport: these ones cointain text that can be translated and image of a chart.

## I18n, to achieve the translation on the front-end I used 'vue-i18n'. to implement this I created under the js folder the following: 
- js/locales/ en.js and fr.js these files cointain the translation to each language respectively in json format. 
- i18n.js this file contains a call to the vue-i18n object and loads locales file in this file then reads from localeStore in case a language is not defined  then english is default.
- in the app.js I incorporated the i18n object and added it to the app Vue object so it could be reachable throughout the SPA using the translation function $t("key") 
- in MainMenu.vue I made a select html element that tells the i18n objet about the current selected language. this make the change take efect in the SPA.     

[![demo.png](https://i.postimg.cc/wMMtnWFd/demo.png)](https://postimg.cc/CnyLqsWv)
#


## Settings

clone repo. 

access client folder y execute  `npm install`. once finish run  `npm watch`  


on main folder run 
`composer install`. 
`cp .env.example .env`. 
`php artisan key:generate` 

then start serving  `php artisan serve` 

Go to http://127.0.0.1:8000/
