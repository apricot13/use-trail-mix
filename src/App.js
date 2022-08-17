import { ScoutButton, SolidButton } from '@apricot13/trail-mix';
import './App.css';

function App() {

  const localOfferSettings = {
    "description": "dfsdfs",
    "link": "http://www.google.com",
    "survey_answers": [
      "{answer: \"fsdfsdf\", question: \"What outcomes does y…}",
      "{answer: \"dfsdfsdf\", question: \"What recent SEND-sp…}",
      "{answer: \"dfsdfs\", question: \"How do you involve pa…}",
      "{answer: \"fsdfsd\", question: \"How will you share in…}",
      "{answer: \"fsdfs\", question: \"How accessible is the …}",
      "{answer: \"dfsdf\", question: \"How can children and y…}",
      "{answer: \"sdfsdf\", question: \"What future plans do …}"
    ],
    "sendNeeds": [
      "{id: 3, name: \"Visual impairment\", slug: \"visual-im…}",
      "{id: 4, name: \"Mobility\", slug: \"mobility\"}",
      "{id: 5, name: \"Cognitive\", slug: \"cognitive\"}"
    ]
  }

  return (
    <div className="App">
      {/* <LocalOffer {...localOfferSettings} /> */}

      <br /><br /><br /><br />
      <ScoutButton>Scout button</ScoutButton>

      <br /><br /><br /><br />
      <SolidButton>SolidButton</SolidButton>
    </div>
  );
}

export default App;
