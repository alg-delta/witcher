import React from "react";
import Accordion from "react-bootstrap/Accordion";
export default function Witcher4() {
  return (
    <div>
      {" "}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Відьмак4</Accordion.Header>
          <Accordion.Body>
            Відьмак IV (англ. The Witcher IV; пол. Wiedźmin IV) — це майбутня
            рольова гра, що розробляється CD Projekt Red та видаватиметься CD
            Projekt. Це перша частина нової трилогії серії «Відьмак», події якої
            відбуваються після подій «Відьмак 3: Дикий гін». На відміну від
            оригінальної трилогії, головним героєм якої був Ґеральт з Рівії, у
            четвертій частині ігрової серії головною героїнею є його прийомна
            донька Цірі з Цінтри.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <img className="witcher4" src="vedmak-4-news.png"></img>
      <img className="witcher" src="The-Witcher-4-1.jpg"></img>
    </div>
  );
}
