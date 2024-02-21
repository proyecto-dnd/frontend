'use client'
import Down from '@/components/icons/ui/Down'
import styles from './LoginPopup.module.css'
import { useState } from 'react'
import Up from '@/components/icons/ui/Up'
import Input from '@/components/common/inputs/Input'
import InputPassword from '@/components/common/inputs/InputPassword'
import Button from '@/components/common/buttons/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { auth } from '@/context/authentication'
import { signInWithEmailAndPassword  } from 'firebase/auth'
import { json } from 'stream/consumers'

const LoginPopup = () => {

  const router = useRouter()

  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(!show)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    //LOGIN firebase
    signInWithEmailAndPassword(auth, "prueba@gmail.com", "pass123").then(async userCredentials => {

    // console.log(await userCredentials.user.getIdToken())

    // localStorage.setItem("access_token", await userCredentials.user.getIdToken())    

    let token = await userCredentials.user.getIdToken()

    let data:  Record<string, string>= {
      idToken: token
    }

    const jsonData = JSON.stringify(data)

    // api login endpoint
    fetch("http://localhost:8080/api/v1/user/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData,
    }).then( res => console.log(res.body))// TODO .then redirect
  }).catch((err) => {
      let errorCode = err.code;
      let errorMessage = err.message;
      console.log(errorCode)
      console.log(errorMessage)
    })
    // TODO: Fetch
    // Hardcoded localstorage for testing
    const username = (e.target as HTMLFormElement).user.value
    window.localStorage.setItem('user', username)
    // router.push('/')
  }

  return (
    <section className={styles.container}>
      <button className={styles.button} onClick={handleClick}>
        <span>Iniciar sesión</span>
        {show ? (
          <Up size={'1em'} />
        ) : (
          <Down size={'1em'} />
        )}
      </button>
      <form onSubmit={handleSubmit} className={`${styles.popup} ${show ? styles.show : styles.hide}`}>
          {/* <h3>Iniciar sesión</h3> */}
          <label htmlFor="user">Usuario</label>
          <Input type="text" name="user" placeholder="Escribe aquí..."  />
          <label htmlFor="password">Contraseña</label>
          <InputPassword name="password" placeholder="••••••••••"  />
          <Button type='submit' className={styles.submit}>Iniciar sesión</Button>
          <hr />
          <span>¿No tienes cuenta? <Link href={'/auth/signup'}>Regístrate</Link></span>
      </form>
    </section>
  )
}

export default LoginPopup