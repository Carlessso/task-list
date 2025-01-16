import React, { useState } from "react";
import "./Kanban.css";
import Column from "../Column/Column";
import AddCardForm from "../AddCardForm/AddCardForm";

interface Card {
  id: string;
  text: string;
}

interface ColumnData {
  title: string;
  subtitle: string;
  columClass: string;
  cards: Card[];
}

function Kanban() {
  const [columns, setColumns] = useState<ColumnData[]>([
    {
      title: "To-do",
      subtitle: "To-do Items",
      columClass: "left-column",
      cards: [],
    },
    {
      title: "Doing",
      subtitle: "Doing Items",
      columClass: "right-column",
      cards: [],
    },
    {
      title: "Done",
      subtitle: "Done Items",
      columClass: "left-column",
      cards: [],
    },
  ]);

  const addCard = (columnTitle: string, text: string) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.title === columnTitle
          ? {
              ...col,
              cards: [...col.cards, { id: Date.now().toString(), text }],
            }
          : col
      )
    );
  };

  return (
    <div style={styles.container}>
      <AddCardForm columns={columns} onAdd={addCard} />
      <div style={styles.columnsContainer}>
        {columns.map((col) => (
          <Column
            key={col.title}
            title={col.title}
            subtitle={col.subtitle}
            columClass={col.columClass}
            cards={col.cards}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  columnsContainer: {
    display: "flex",
    height: "calc(100vh - 100px)", // Altura ajustada
  },
};

export default Kanban;
