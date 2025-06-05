import React from "react";
import Accordion from "react-bootstrap/Accordion";
export default function Witcher5() {
  return (
    <div>
      {" "}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Відьмак5</Accordion.Header>
          <Accordion.Body>
            The Witcher Adventure Game (укр. Відьмак: Пригодницька гра) —
            настільна гра, дії якої розгортаються у всесвіті «Відьмак».
            Настільну версію гри розробляла польська компанія CD Projekt Red та
            Fantasy Flight Games. Цифрову версію розробили CD Projekt Red та Can
            Explode Games.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <img className="witcher5" src="Без назви.jpg"></img>
      <img className="witcher" src="Witcher.webp"></img>
    </div>
  );
}
