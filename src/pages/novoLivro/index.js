import React from "react";
import { Link } from 'react-router-dom' 
import './style.css';
import logoImage from '../../assets/logo.svg';

import { FiArrowLeft } from 'react-icons/fi';



export default function novoLivro() {

     const handleClick = () => {
        window.location.href = '/livros';
      };
    return (
        <div className="novo-livro-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="erudio"/>
                    <h1>Novo Livro</h1>
                    <p>Adicione informações do novo livro</p>
                    <Link onClick={handleClick}>
                        <FiArrowLeft size={16} color="251fc5"/>
                        Home
                    </Link>
                </section>
                <form>
                    <input placeholder="Title"/>
                    <input placeholder="Autor"/>
                    <input type="date"/>
                    <input placeholder="Preço"/>

                    <button className="button" type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}