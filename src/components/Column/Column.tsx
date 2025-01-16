import React from "react";

interface Card {
  id: string;
  text: string;
}

interface Props {
  title: string;
  subtitle: string;
  columClass: string;
  cards: Card[];
}

function Column({ title, subtitle, columClass, cards }: Props) {
  return (
    <div style={styles.column} className={columClass}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>{card.text}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  column: {
    flex: 1,
    padding: "20px",
    boxSizing: "border-box",
  },
};

export default Column;
