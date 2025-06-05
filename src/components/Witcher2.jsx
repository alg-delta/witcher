import React from "react";
import Accordion from "react-bootstrap/Accordion";
export default function Witcher2() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Відьмак2</Accordion.Header>
          <Accordion.Body>
            Відьмак 2: Убивці королів (пол. Wiedźmin 2: Zabójcy Królów, англ.
            The Witcher 2: Assassins of Kings) — рольова відеогра, розроблена
            польською компанією CD Projekt RED за мотивами серії романів
            «Відьмак» відомого польського письменника Анджея Сапковського,
            продовження (сиквел) відеогри Відьмак 2007 року випуску. Міжнародний
            реліз гри відбувся 17 травня 2011 року. Цільовою платформою гри є
            Windows (PC). Анонсований вихід гри для платформи Xbox 360 на
            початку 2012 року. Бюджет гри перевищує 30 мільйонів злотих.. Гра
            була видана 17 травня 2011 року. Видавцями в Північній Америці є
            Atari, в Польщі і в східній Європі CD Projekt. Фірма Namco Bandai —
            видавець у західній Європі на близькому сході та в Африці, а також в
            Азії і Австралії.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <img className="witcher2" src="Witcher_2_cover.jpg"></img>
      <img
        className="witcher"
        src="the-witcher-season-2-recap-know-what-happened-before-you-stream-season-3.webp"
      ></img>
    </div>
  );
}
