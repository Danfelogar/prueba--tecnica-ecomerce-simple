
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
    return (
        <div className="wrap-main">
            <div className="auth_main">
                <div className="form_wrapper">
                    <div className="form_container">
                        <div className="title_container">
                        <h2>Bienvenido Querido usuario!</h2>
                        <h1>Te invitamos a entrar </h1>
                        </div>
                        <div className="row clearfix">
                        <div className="">
                            <form>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                    <input type="text" name="name" placeholder="Nombre De Usuario" />
                                </div>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                <input type="password" name="password" placeholder="Contraseña" required />
                            </div>
                            <input className="button" type="submit" value="Ingresar" />
                            </form>
                        </div>
                        </div>
                    </div>
                <p className="credit">¿ No tienes una cuenta ? <Link to="/auth/register">Create una aqui</Link></p>
                </div>
            </div>
        </div>
    )
}