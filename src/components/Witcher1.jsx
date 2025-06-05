import React from "react";
import Accordion from "react-bootstrap/Accordion";
export default function Witcher1() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Відьмак</Accordion.Header>
          <Accordion.Body>
            «Відьмак»(пол. Wiedźmin , англ. The Witcher) — рольова відеогра за
            мотивами серії романів «Відьмак» Анджея Сапковського, розроблена
            польською компанією CD Projekt RED. Події в The Witcher відбуваються
            в середньовічному фентезі світі. Гра розповідає історію про, одного
            з небагатьох, відьмака Ґеральта з Рівії, якому під час подорожі
            доводиться обирати моральні рішення, що вплинуть на весь ігровий
            світ. Гра використовує рушій Aurora Engine від BioWare. Критики
            високо оцінили сюжет, графіку, звукове оформлення та бойову систему.
            Гра стала комерційно-успішною і до 2012 року було продано понад 2
            млн копій. 18 вересня 2009 CD Projekt RED офіційно підтвердила, що
            вони почали працювати над сиквелом — The Witcher 2: Assassins of
            Kings, який був випущений 17 травня 2011 року для ПК і 17 квітня
            2012 року для Xbox 360. Третя, заключна, гра з серії була анонсована
            під назвою The Witcher 3: Wild Hunt і була випущена 19 травня 2015
            року.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <img className="witcher1" src="The_Witcher_Season_1.jpg"></img>
      <img className="witcher" src="960x0.webp"></img>
    </div>
  );
}
