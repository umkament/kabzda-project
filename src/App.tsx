import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

// создана функция способом function declaration
// она создается для объявления компоненты н-р function App()
// {} в фигурных скобках функция делает что-то полезное, а в конце возвращает (retern) JSX - (html-подобный JS для глаз)
// способы определения функции: как function expression н-р const App = function()
// так же есть стрелочная функция н-р  const App = () => (прочитать дополнительно про синтаксис стрелочной функции)
// стрелочная функция используется для обработчиков событий
//

function Hello() {
  debugger
  alert('Hello IT-kamasutra')
}

// hello();


function App() {
  console.log("App rendering")

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [on, setOn] = useState<boolean>(false)

  return (
     <div className='App'>


       <OnOff setOn={() => {
         setOn(!on)
       }}
              on={on}
       />


       <Rating value={ratingValue}
               setRatingValue={setRatingValue}
       />

       <Accordion title="Menu"
                  collapsed={accordionCollapsed}
                  setAccordionCollapsed={() => {setAccordionCollapsed(!accordionCollapsed)}}
                  items={[]}
                  onClick={()=>{}}
       />

       <UncontrolledOnOff onChange={setOn}/> {on.toString()}

       {/*    <UncontrolledAccordion title="Menu"/>
       <UncontrolledAccordion title={"Users"}/>

       <UncontrolledRating />*/}

       {/* <PageTitle title="this is APP component"/>
       <PageTitle title="my friend"/>
       Article 1
       <Rating value={3}/>
       <Accordion title="Menu" collapsed={true}/>
       <Accordion title={"Users"} collapsed={false}/>
       Article 2
       <Rating value={0}/>
       <Rating value={1}/>
       <Rating value={2}/>
       <Rating value={3}/>
       <Rating value={4}/>
       <Rating value={5}/>
       <Rating value={0}/>*/}
     </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: any) {
  console.log("PageTitle rendering")
  return <h1>{props.title}</h1>
}


// созданы функции в которых возвращается JSX-элемент, один конктретный элемент
// когда создаются такие функции в системе появляются теги, которых раньше не существовало н-р тег - App, Rating, Accordion
export default App;
