import React from "react";
import Header from '../parts/Header'
import Footer from '../parts/Footer'

export default function Form() {
    return (
     <div className="wrapper">
        <header>
        <section className="cabecalho">
            <Header/>
            <h1>Cadastro de Novo Cliente</h1>

        </section>
    </header>
        <main className="container">
            <form className="form" id="form">
                <div className="form-control">
                    <label for="username" className="inline">Nome:</label> 
                    <input className="caixaGrande" id="username" type="text"/>
                    <i
                        ><img className="img-success" src="./imagens/sucesso.png" alt="sucesso"
                        /></i>
                    <i><img className="img-error" src="./imagens/erro.png" alt="erro" /></i>
                    <small>Error message</small>
                </div>
                
                <div className="form-control">
                    <label for="email" className="inline">E-mail:</label> 
                    <input className="caixaGrande" id="email" type="email"/>
                    <i
                        ><img className="img-success" src="./imagens/sucesso.png" alt="sucesso"
                        /></i>
                    <i><img className="img-error" src="./imagens/erro.png" alt="erro"/></i>
                    <small>Error message</small>
                </div>
                
                <div className="form-control">
                    <label for="telefone">telefone:</label> 
                    <input className="inline" id="telefone" type="tel"/>
                    <i
                        ><img className="img-success" src="./imagens/sucesso.png" alt="sucesso"
                    /></i>
                    <i><img className="img-error" src="./imagens/erro.png" alt="erro"/></i>
                    <small>Error message</small>
                </div>
                <div className="busca">
                    <label>busca:</label>
                    <label className="inline"><input className="inline" type="checkbox"/>casa</label> 
                    <label className="inline"><input className="inline" type="checkbox"/>apto</label>
                    <label className="inline"><input className="inline" type="checkbox"/>cobertura</label>
                    <label className="inline"><input className="inline" type="checkbox"/>lote</label>
                    <label className="inline"><input className="inline" type="checkbox"/> galpão</label>
                </div>

                <div className="busca">
                    <label>quartos:</label>
                    <label className="inline"><input className="inline" type="checkbox"/>1</label>
                    <label className="inline"><input className="inline" type="checkbox"/>2</label>
                    <label className="inline"><input className="inline" type="checkbox"/>3</label>
                    <label className="inline"><input className="inline" type="checkbox"/>4</label>
                    <label className="inline"><input className="inline" type="checkbox"/>4 ou +</label>
                </div>
                
                <div className="busca">
                    <label>imóvel a venda conosco?</label>
                    <label className="inline"><input className="inline" type="checkbox"/>sim</label>
                    <input type="text"/>
                    <label className="inline"><input className="inline" type="checkbox"/>não</label>
                </div>
                
                <div className="busca">
                    <label>Interações com o cliente:</label>
                    <ol>
                        <li><input type="text"/> </li>
                        <li><input type="text"/> </li>
                
                    </ol>

                </div>
                
                <button type="submit">Cadastrar</button>
                <button>Retornar</button>
            </form>
        </main>
        <Footer/>
     </div>
  
    );
  }