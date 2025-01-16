import React, { useState } from "react";

interface Card {
  id: string;
  text: string;
}

interface ColumnData {
  title: string;
}

interface Props {
  columns: ColumnData[];
  onAdd: (columnTitle: string, text: string) => void;
}

function AddCardForm({ columns, onAdd }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("");
  const [selectedColumn, setSelectedColumn] = useState(columns[0]?.title || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && selectedColumn) {
      onAdd(selectedColumn, text);
      setText("");
      setIsVisible(false); // Fecha o formulário após adicionar
    }
  };

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={() => setIsVisible(true)}
        style={styles.floatingButton}
        aria-label="Add Card"
      >
        +
      </button>

      {/* Formulário em Modo Janela */}
      {isVisible && (
        <div style={styles.overlay}>
          <div style={styles.formWindow}>
            <h2>Add a New Card</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              <select
                value={selectedColumn}
                onChange={(e) => setSelectedColumn(e.target.value)}
                style={styles.select}
              >
                {columns.map((col) => (
                  <option key={col.title} value={col.title}>
                    {col.title}
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Card content"
                style={styles.input}
              />
              <div style={styles.buttons}>
                <button
                  type="button"
                  onClick={() => setIsVisible(false)}
                  style={styles.cancelButton}
                >
                  Cancel
                </button>
                <button type="submit" style={styles.addButton}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  floatingButton: {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "24px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formWindow: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  form: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  select: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  cancelButton: {
    padding: "8px 16px",
    backgroundColor: "#ccc",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  addButton: {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default AddCardForm;
