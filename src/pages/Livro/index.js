import React from "react";
import './styles.css';
import logoImage from '../../assets/logo.svg';

import { FiPower, FiEdit, FiTrash2 } from 'react-icons/fi';

export default function Livros () {
  
    const handleClick = () => {
        window.location.href = '/livro-novo';
      };

    return (
        <div className="livro-container">
            <header>
                <img src={logoImage} alt="erudio"/>
                <span>Seja bem vindo <strong> Juliandson Barros</strong>!</span>
                <button className="button" onClick={handleClick}>Adicione um Livro</button>
                <button type="button">
                    <FiPower size={18} color="#251FC5"/>
                </button>
            </header>

            <h1>Registre um livro</h1>
                <ul>
                    <li>
                        <strong>Titulo:</strong>
                        <p>Pai Rico Pai Pobre</p>
                        <strong>Autor:</strong>
                        <p>Robert Kiozaki</p>
                        <strong>Preço:</strong>
                        <p>49,90</p>

                        <button>
                            <FiEdit size={20} color="#211fc5"/>
                        </button>

                        <button>
                            <FiTrash2 size={20} color="#211fc5"/>
                        </button>
                    </li>

                    <li>
                        <strong>Titulo:</strong>
                        <p>Pai Rico Pai Pobre</p>
                        <strong>Autor:</strong>
                        <p>Robert Kiozaki</p>
                        <strong>Preço:</strong>
                        <p>49,90</p>

                        <button>
                            <FiEdit size={20} color="#211fc5"/>
                        </button>

                        <button>
                            <FiTrash2 size={20} color="#211fc5"/>
                        </button>
                    </li>

                    <li>
                        <strong>Titulo:</strong>
                        <p>Pai Rico Pai Pobre</p>
                        <strong>Autor:</strong>
                        <p>Robert Kiozaki</p>
                        <strong>Preço:</strong>
                        <p>49,90</p>

                        <button>
                            <FiEdit size={20} color="#211fc5"/>
                        </button>

                        <button>
                            <FiTrash2 size={20} color="#211fc5"/>
                        </button>
                    </li>

                    <li>
                        <strong>Titulo:</strong>
                        <p>Pai Rico Pai Pobre</p>
                        <strong>Autor:</strong>
                        <p>Robert Kiozaki</p>
                        <strong>Preço:</strong>
                        <p>49,90</p>

                        <button>
                            <FiEdit size={20} color="#211fc5"/>
                        </button>

                        <button>
                            <FiTrash2 size={20} color="#211fc5"/>
                        </button>
                    </li>

                    <li>
                        <strong>Titulo:</strong>
                        <p>Pai Rico Pai Pobre</p>
                        <strong>Autor:</strong>
                        <p>Robert Kiozaki</p>
                        <strong>Preço:</strong>
                        <p>49,90</p>

                        <button>
                            <FiEdit size={20} color="#211fc5"/>
                        </button>

                        <button>
                            <FiTrash2 size={20} color="#211fc5"/>
                        </button>
                    </li>

                    <li>
                        <strong>Titulo:</strong>
                        <p>Pai Rico Pai Pobre</p>
                        <strong>Autor:</strong>
                        <p>Robert Kiozaki</p>
                        <strong>Preço:</strong>
                        <p>49,90</p>

                        <button>
                            <FiEdit size={20} color="#211fc5"/>
                        </button>

                        <button>
                            <FiTrash2 size={20} color="#211fc5"/>
                        </button>
                    </li>

                    <li>
                        <strong>Titulo:</strong>
                        <p>Pai Rico Pai Pobre</p>
                        <strong>Autor:</strong>
                        <p>Robert Kiozaki</p>
                        <strong>Preço:</strong>
                        <p>49,90</p>

                        <button>
                            <FiEdit size={20} color="#211fc5"/>
                        </button>

                        <button>
                            <FiTrash2 size={20} color="#211fc5"/>
                        </button>
                    </li>
                </ul>

                
        </div>
    );
}