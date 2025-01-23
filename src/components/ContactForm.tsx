import * as React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../redux/store.ts"
import { clearData, setData } from '../redux/reducer/EmailSlice.ts';

import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const values = useSelector((state: RootState) => state.email)
  const dispatch = useDispatch()
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  function sendEmail(e) {
    e.preventDefault()

    if (values.data.name === '' || values.data.email === '' || values.data.message === '') {
      alert("Preenche todos os campos");
      return
    }

    const templateParams = {
      from_name: values.data.name,
      message: values.data.message,
      email: values.data.email
    }
    alert("E-mail enviado com sucesso")
    dispatch(clearData())
    emailjs.send("service_bt6xqh8", "template_6d1a62v", templateParams, "jsh8kgI3fR9yq51aJ").then((response) => {

    }, (err) => {
      console.log("Erro: ", err)
    })
  }

  return (
    <div className='container mx-auto flex justify-center items-center  flex-col w-3/5'>
      <form onSubmit={sendEmail}>
        <label htmlFor='name' className={darkMode ? "text-white" : "text-black"}>Nome: </label>
        <input
          type="text"
          name='name'
          id='name' required
          placeholder='Digite seu nome'
          className='w-full border-2 rounded px-2 py-1'
          value={values.data.name}
          onChange={e => dispatch(setData({ name: e.target.value }))} />
        <label htmlFor="email" className={darkMode ? "text-white mt-1" : "text-black mt-1"}>Email: </label>
        <input
          type="email"
          id='email'
          name='email'
          required
          placeholder='Digite seu email'
          className='w-full border-2 rounded px-2 py-1'
          value={values.data.email}
          onChange={e => dispatch(setData({ email: e.target.value }))} />
        <label htmlFor="message" className={darkMode ? "text-white" : "text-black"}>Mensagem: </label>
        <textarea
          name="message"
          id="message"
          required
          placeholder='Digite sua mensagem'
          className='w-full border-2 rounded px-2 py-1'
          value={values.data.message}
          onChange={e => dispatch(setData({ message: e.target.value }))}></textarea>
        <div className='flex justify-center w-full m-4'>
          <button className='bg-[#22c55e] hover:bg-[#16a34a] w-2/5 h-10 rounded px-2 py-1 self-center'>Enviar</button>
        </div>
      </form>
    </div>

  )
}