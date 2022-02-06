import React from 'react';

export const Search = ({onChange, onClick}) => {
    return (
        <div className="input-group mb-3">
            <input
                onChange={(e) => onChange(e)}
                type="text"
                className="form-control"
                placeholder="Search Movie..."
                aria-label="Search Movie..."
                aria-describedby="button-addon2" />
            <button
                onClick={onClick}
                className="btn btn-outline-secondary bg-warning"
                type="button"
                id="button-addon2">Button</button>
        </div>
    )
}

/*
input içerisindeki değişiklikleri yakalamak için props olarak "onChange" i tanımlıyoruz. "(e) => onChange(e)" e ye ulaşmak için arrow function olarak tanımlıyoruz.

button içerisinde de props olarak "onClick" tanımlıyoruz. burada arrow function yazmamıza gerek yok.

input ve buttonda tanımlamış olduğumuz propsları yukarıda " {onChange, onClick} " nitelemesni yapıyoruz

App.js te tanımlanış olduğumuz Search propu içerisnde tanımlamız gerekiyor.
<Search 
    onChange={onChange}
    onClick={onClick}
/>

const onChange = (e) => {console.log(e.target.value)}
const onClick = () => {console.log("tıklandı")}


*/