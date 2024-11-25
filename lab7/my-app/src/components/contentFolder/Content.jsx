import React, { Component } from "react";
import classes from "./Content.module.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlighted: [],
    };
  }

  toggleHighlight = (index) => {
    this.setState((prevState) => {
      const { highlighted } = prevState;
      return {
        highlighted: highlighted.includes(index)
          ? highlighted.filter((i) => i !== index)
          : [...highlighted, index],
      };
    });
  };

  render() {
    const { highlighted } = this.state;

    return (
      <div>
        <p>Дата народження: 12 лютого 2005 року; м.Суми</p>
        <p>
          Освіта: Роменська загальноосвітня школа №5; <br />
          НТУУ "КПІ", м.Київ
        </p>
        <p>Хоббі:</p>
        <ul>
          <li>Fly Yoga</li>
          {["Настільні ігри *", "Фітнес *"].map((hobby, index) => (
            <li
              key={index}
              className={
                highlighted.includes(index) ? classes.highlightColor : ""
              }
              onClick={() => this.toggleHighlight(index)}
            >
              {hobby}
            </li>
          ))}
          <li>Сапсерфінг</li>
        </ul>
        <p>Улюблені фільми:</p>
        <ol>
          <li>"Покинь, якщо кохаєш", 2024</li>
          <li>"Втеча з Шоушенка", 1994</li>
          <li>"Граф Монте-Крісто", 2024</li>
        </ol>
        <p>
          Ки́їв — столиця та найбільше місто України. Розташований у середній
          течії Дніпра, у північній Наддніпрянщині. Політичний,
          соціально-економічний, транспортний, освітньо-науковий, історичний,
          культурний та духовний центр України. У системі
          адміністративно-територіального устрою України Київ має спеціальний
          статус, визначений Конституцією, і не входить до складу жодної
          області, хоча і є адміністративним центром Київської області. Місце
          розташування центральних органів влади України, іноземних місій,
          штаб-квартир більшості підприємств і громадських об'єднань, що
          працюють в Україні.
          <br />
          <br />
          Один із найстаріших історичних центрів Східної Європи та християнства
          — Софійський собор та Києво-Печерська лавра — внесені до списку
          Світової спадщини ЮНЕСКО.
        </p>
      </div>
    );
  }
}

export default Content;
