import './App.css';
import Greet from './components/props/Greet'
import Person from './components/props/ObjectProp'
import PersonList from './components/props/ObjectsList';
import Heading from './components/props/Heading';
import ChildrenProps from './components/props/ChildrenProps';
import OnClick from './components/props/OnClickEvent';
import UseStateHook from './components/hooks/UseState';
import { UseReducer } from './components/hooks/UseReducer';
import { UseRef } from './components/hooks/UseRef';
import {PrivateComponent} from './components/props/PrivateComponent'
import { ComponentProp } from './components/props/ComponentProps'
import ItemsList from './components/generics/ItemsList'
import RestrictProps from './components/restriction/RestrictProps';
import { Templates } from './components/template-literals/Templates';
import HtmlButton from './components/wrap-html/HtmlButton'
import { HtmlInput } from './components/wrap-html/HtmlInput';
const nameObject={
  first:'Prakruti',
  last:'Gandhi'
}

const namesList=[
  {first:'Prakruti',
  last:'Gandhi',
  },

  {first:'Jainy',
  last:'Gandhi',}

]
function App() {
  return (
    <div className="App">
    {/* Props examples
    
     <Greet name="Prakruti"/>
     <Person name={nameObject}></Person>
     <PersonList names={namesList}></PersonList>
     <ChildrenProps>
       <Heading>Hello World</Heading>
     </ChildrenProps>
     <OnClick handleClick={(event,id)=>{console.log("Button Clicked",event,id)}}></OnClick>
     */}

     <UseStateHook/>
     <UseReducer/>
     <UseRef/>

     <ComponentProp isLoggedIn={true} component={PrivateComponent} />

     {/* <ItemsList items={['Praks','helo']} onClick={()=>{console.log("Hello")}}></ItemsList> */}

     <RestrictProps value={10} isPositive />
     <Templates position="center"></Templates>
     <HtmlButton variant="primary" onClick={()=>{console.log("Click")}}>
       CLICK
    </HtmlButton>
    <HtmlInput type="text"/>
    </div>
  );
}

export default App;
