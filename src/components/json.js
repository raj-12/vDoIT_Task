const json = {
    // title: "Sport Team Data",
    pages: [
      {
        questions: [
            {
                type: "dropdown",
                name: "Age Bracket",
                title: "Choose Your Age Bracket?",
                isRequired: true,
                colCount: 0,
                choices: [
                    "Adult",
                    "Junior",
                ]
            }
        ]
      },
      {
        questions: [
            {
                type: "radiogroup",
                name: "Gender",
                title: "Choose Your Gender?",
                isRequired: true,
                colCount: 1,
                visibleIf: "{Age Bracket} == 'Adult'",
                choices: [
                    "Men","Women","Coed"
                ]
            },
          
       
        ]
      },
      
      
      {

        questions: [
            {
                type: "radiogroup",
                name: "X-U(Range)",
                title: "Choose You Age Range (X-U)?",
                isRequired: true,
                colCount: 1,
                visibleIf: "{Age Bracket} == 'Adult'",
                choices: [
                    "26-U","40-U","50-U","60-U","70-U"
                ]
            },

            {
              type: "radiogroup",
              name: "xs-U(Range)",
              visibleIf: "{Age Bracket} == 'Junior'",
              isRequired: true,
              title: "Choose Your Age Range (x-U) ?",
              choices: [
                  "13-U","14-U","15-U","16-U","17-U"
              ]
            },
        ]
      },

      {
        questions: [
            {
                type: "checkbox",
                name: "Skills(Adult)",
                title: "Choosing ONE or MORE skills from 5 choices?",
                isRequired: true,
                colCount: 1,
                visibleIf: "{Age Bracket} == 'Adult'",
                choices: [
                    "A","AA","AAA","Novice","Masters"
                ]
            },


            {
                type: "checkbox",
                name: "Skills(Junior)",
                visibleIf: "{Age Bracket} == 'Junior'",
                isRequired: true,
                title: "Choosing ONE or MORE skills from 5 choices?",
                choices: [
                    "Bronze","Silver","Gold","High School","Club"
                ]
              },
           
        ]
         
      },


      {
        questions: [
          {
            type: "text",
            name: "Team Name",
            isRequired: true,
            title:
              "Name of the Sport Team ?"
          }
        ]
      }
    ],
    completedHtml: `<p><h4>Thank you for filling this form.</h4></p><p>Your team name: <b>{Team Name}</b></p><p>Age Bracket: <b>{Age Bracket}  {Gender}</b></p><p>Skills :  {Skills(Adult)} {Skills(Junior)}</p><p>Age Range : {X-U(Range)} {xs-U(Range)}</p>`
  };



  export default json;