import React, { useState, useEffect } from "react";     // Guardo o estado de uma pagina
import * as styl from './styles';
import QR from 'qrcode.react'
import { Redirect } from "react-router-dom";

import Header from '../../components/Header';
import Footer from '../../components/Footer';


function QRCode() {
    const [mac, setMac] = useState();
    const [redirect, setRedirect] = useState(false);

    // salva dentro do navegador Application - Storage - Local Storage
    async function SaveMac() {
        if (!mac) {
            alert('Numero Macadddress é obrigatório');
        } else {
            await localStorage.setItem('@grandCharles/macadddress', mac)
            setRedirect(true);
            window.location.reload();
        }
    }

    return (
        <styl.Container>
            {redirect && <Redirect to="/" />}

            <Header />

            <styl.Content>
                <h1>CAPTURE O QRCODE PELO APP</h1>

                <styl.QrCodeArea>

                    <QR value="getMacadddress" size='250' />

                </styl.QrCodeArea>

                <p>Suas atividades serão Sincronizadas pelo Celular - 14:14:14:11:11:11</p>

            </styl.Content>

            <styl.ValidationCode>

                <span>Digite o número que apareceu no seu celular</span>

                <input type="text"
                    onChange={ev => setMac(ev.target.value)}
                    value={mac}
                />

                <button type="button" onClick={SaveMac}>
                    SINCRONIZAR
                </button>

            </styl.ValidationCode>

            <Footer />
        </styl.Container>
    )
}

export default QRCode;
