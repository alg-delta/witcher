import React from "react";
import Accordion from "react-bootstrap/Accordion";
export default function Witcher3() {
  return (
    <div>
      {" "}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Відьмак3</Accordion.Header>
          <Accordion.Body>
            The Witcher 3: Wild Hunt (пол. Wiedźmin 3: Dziki Gon; укр. «Відьмак
            3: Дикий гін») — комп'ютерна гра у стилі action/RPG, розроблена
            польською компанією CD Projekt RED за мотивами серії романів
            «Відьмак» письменника Анджея Сапковського. Гра продовжує «Відьмак» і
            «Відьмак 2: Вбивці королів» та завершує трилогію відеоігор про
            відьмака. Вихід гри був запланований на 2014 рік, але потім було
            ухвалене рішення про перенесення випуску на лютий 2015 року.
            Зрештою, остаточною датою було обрано 19 травня, коли гра вийшла на
            Windows, PlayStation 4 і Xbox One. Станом на квітень-травень 2015
            року The Witcher 3: Wild Hunt стала найшвидше продаваною відеогрою
            Великої Британії. Станом на 2017 рік продано понад 20 мільйонів
            копій. Гра набагато частіше звертається до літературного
            першоджерела, ніж попередні частини.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <img className="witcher3" src="400_0_1577977009-8590.jpg"></img>
      <img className="witcher" src="600x600bf-60.jpg"></img>
    </div>
  );
}
