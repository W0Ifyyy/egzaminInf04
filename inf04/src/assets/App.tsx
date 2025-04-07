import { useState } from "react";

function App() {
  const [kategorie, setKategorie] = useState([
    { id: 1, nazwa: "Kwiaty", value: true },
    { id: 2, nazwa: "Zwierzęta", value: true },
    { id: 3, nazwa: "Samochody", value: true },
  ]);

  const [galeria, setGaleria] = useState([
    { id: 0, alt: "Mak", filename: "obraz1.jpg", category: 1, downloads: 35 },
    {
      id: 1,
      alt: "Bukiet",
      filename: "obraz2.jpg",
      category: 1,
      downloads: 43,
    },
    {
      id: 2,
      alt: "Dalmatyńczyk",
      filename: "obraz3.jpg",
      category: 2,
      downloads: 2,
    },
    {
      id: 3,
      alt: "Świnka morska",
      filename: "obraz4.jpg",
      category: 2,
      downloads: 53,
    },
    {
      id: 4,
      alt: "Rotwailer",
      filename: "obraz5.jpg",
      category: 2,
      downloads: 43,
    },
    { id: 5, alt: "Audi", filename: "obraz6.jpg", category: 3, downloads: 11 },
    { id: 6, alt: "kotki", filename: "obraz7.jpg", category: 2, downloads: 22 },
    { id: 7, alt: "Róża", filename: "obraz8.jpg", category: 1, downloads: 33 },
    {
      id: 8,
      alt: "Świnka morska",
      filename: "obraz9.jpg",
      category: 2,
      downloads: 123,
    },
    {
      id: 9,
      alt: "Foksterier",
      filename: "obraz10.jpg",
      category: 2,
      downloads: 22,
    },
    {
      id: 10,
      alt: "Szczeniak",
      filename: "obraz11.jpg",
      category: 2,
      downloads: 12,
    },
    {
      id: 11,
      alt: "Garbus",
      filename: "obraz12.jpg",
      category: 3,
      downloads: 321,
    },
  ]);

  function pobierz(index: number) {
    setGaleria((prevGaleria) =>
      prevGaleria.map((zdjecie, i) => {
        return i === index
          ? { ...zdjecie, downloads: zdjecie.downloads + 1 }
          : zdjecie;
      })
    );
  }

  function zmienKategorie(id: number) {
    setKategorie((prevKategorie) =>
      prevKategorie.map((kategoria) => {
        return id === kategoria.id
          ? { ...kategoria, value: !kategoria.value }
          : kategoria;
      })
    );
  }

  return (
    <>
      <h1>Kategorie zdjęć</h1>
      <div>
        <div className="form-check-inline form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="kwiaty"
            name="kwiaty"
            checked={kategorie[0].value}
            onChange={() => zmienKategorie(1)}
          />
          <label className="form-check-label" htmlFor="kwiaty">
            Kwiaty
          </label>
        </div>
        <div className="form-check-inline form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="zwierzeta"
            name="zwierzeta"
            checked={kategorie[1].value}
            onChange={() => zmienKategorie(2)}
          />
          <label className="form-check-label" htmlFor="zwierzeta">
            Zwierzęta
          </label>
        </div>
        <div className="form-check-inline form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="samochody"
            name="samochody"
            checked={kategorie[2].value}
            onChange={() => zmienKategorie(3)}
          />
          <label className="form-check-label" htmlFor="samochody">
            Samochody
          </label>
        </div>
      </div>
      <div className="d-inline-flex flex-wrap gap-5">
        {galeria.map((zdjecie, i) => {
          let categoryIndex = kategorie.findIndex(
            (kategoria) => kategoria.id === zdjecie.category
          );
          let render = kategorie[categoryIndex].value;
          return (
            render && (
              <div key={i}>
                <img
                  src={`./assets/${zdjecie.filename}`}
                  alt={zdjecie.alt}
                  className="rounded"
                  style={{ margin: "5px" }}
                />
                <h4>{zdjecie.downloads}</h4>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => pobierz(i)}
                >
                  Pobierz
                </button>
              </div>
            )
          );
        })}
      </div>
    </>
  );
}

export default App;
