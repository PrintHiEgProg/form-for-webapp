import React, { useCallback, useEffect, useState } from "react";
import './App.css'

function App() {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState(""); // добавили состояние для текста
  const tg = window.Telegram.WebApp;

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value); // обновляем текст при изменении
  };

  const onSendData = useCallback(() => {
    const data = {
      rating,
      text, // добавили текст в данные
    };
    tg.sendData(JSON.stringify(data));
    tg.close()
  }, [rating, text]); // добавили зависимости для useCallback

  return (
    <div className="Feedback">
      <div className=""></div>
      <div className="text-feedback">
        <b>Отзыв</b>
      </div>
      <div className="form-for-feedback">
        <label className="itog">Ваш отзыв:</label>
        <br />
        <div className="for-textarea">
          <textarea
            className="form-feedback"
            autocomplete="off"
            placeholder="Напишите отзыв"
            rows="6"
            cols="25"
            autofocus
            required
            value={text} // связали текст с состоянием
            onChange={handleTextChange} // добавили обработчик изменения текста
          ></textarea>
        </div>
      </div>
      <label className="itog">Ваша оценка:</label>
      <div className="Rating">
        <div className="rating-area">
          <input
            type="radio"
            id="star-5"
            name="rating"
            value="5"
            onChange={handleRatingChange}
          />
          <label for="star-5" title="Оценка «5»"></label>
          <input
            type="radio"
            id="star-4"
            name="rating"
            value="4"
            onChange={handleRatingChange}
          />
          <label for="star-4" title="Оценка «4»"></label>
          <input
            type="radio"
            id="star-3"
            name="rating"
            value="3"
            onChange={handleRatingChange}
          />
          <label for="star-3" title="Оценка «3»"></label>
          <input
            type="radio"
            id="star-2"
            name="rating"
            value="2"
            onChange={handleRatingChange}
          />
          <label for="star-2" title="Оценка «2»"></label>
          <input
            type="radio"
            id="star-1"
            name="rating"
            value="1"
            onChange={handleRatingChange}
          />
          <label for="star-1" title="Оценка «1»"></label>
        </div>
      </div>
      <div className="submit-btn">
        <input className="submit" type="submit" onClick={onSendData}></input>
      </div>
    </div>
  );
}

export default App;
