import './App.css';
import { Search } from './components/Search';
import { Card } from './components/Card';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  const onChange = (e) => {
    setText(e.target.value);
  }

  {/*
onchange içerisinde filteleme işlemi yapmamız gerekiyor. Bunun için 
*/}

  const getMovie = () => {
    fetch("http://localhost:3001/data")
      .then(response => response.json())
      .then(result => {
        setResult(result);
        filterMovie();
      });
  }

  const filterMovie = () => {
    return result.filter((item) =>
      item.MovieName.toString().toLowerCase().indexOf(text.toLowerCase()) > -1 ? item : null
    );
  };

  /*
  Search işlemini yapabilmemiz için "onClick" içerisinde "fetch" fonksiyonunu tanımlamamız gerekiyor.
  daha sonra "useState" yi react içerisinden import ediyoruz. Daha sonra aşağıdaki gibi "useState" tanımlamasını yapıyyoruz.
  */

  /*
  "useEffect" sayfa ilk yüklendiği zaman çalışmasını istediğimiz fonksiyonları tanımladığımız reack hook u dur. başında use... varsa o kesin hook tur :) .react tan import etmemiz gereiyor. içerisinde arrow function oluşturuyoruz. fonsiyondan sonra " , []" yazıyoruz. Bu sayfa ilk yüklendiğinde çalışması için olduğunu belli ediyoruz. içerisine "onClick()" fonksiyonunu tanımlıyoruz.
  */

  const [result, setResult] = useState([])
  const [text, setText] = useState("")

  useEffect(() => {
    getMovie()
  }, [])

  const onClick = () => { };

  return (
    <>
      <div className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-5 mb-3">
              <Search
                onChange={onChange}
                onClick={onClick}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-warning">
      <div className="container pt-4">
        <div className="row">
          {/*
verimiz "result" içerisinde geldiği için, aşağıdaki gibi result u map liyoruz. Ölceden oluşturmuş olduğumuz Card ı da bu fonksiyon içerisinde kopyalıyoruz ki arama yaptığımız zaman Card lar oluşsun.
*/}
          {filterMovie().map(item => (
            <Card 
            item={item}
            />
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default App;