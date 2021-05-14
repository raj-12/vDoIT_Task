import React from "react";

import * as Survey from "survey-react";

import "bootstrap/dist/css/bootstrap.css";
import "survey-react/survey.css";

import json from './json'

Survey.StylesManager.applyTheme("bootstrap");


const SurveyComponent = () => {

    const survey = new Survey.Model(json);
    
    survey.onComplete.add(function(result) {
          var j=result.data;
          console.log(j)

          var html='<h5> Sport Team Details : </h5>';
            
          Object.keys(j).map(function(key, index) {
                 return html+=`<h6>${key} : <spam>${j[key]}</spam></h6>`;
            });

          document.querySelector('#surveyResult').innerHTML=html;
      });

    return ( <Survey.Survey model={survey} />);
  
}

export default SurveyComponent;
