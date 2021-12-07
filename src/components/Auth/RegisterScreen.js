
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <div className="wrap-main">
            <div className="auth_main">
                <div className="form_wrapper">
                    <div className="form_container">
                        <div className="title_container">
                        <h2>Registro De Cuenta</h2>
                        </div>
                        <div className="row clearfix">
                        <div className="">
                            <form>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                    <input type="text" name="name" placeholder="Nombre De Usuario" />
                                </div>
                            <div className="input_field"><span><i className="fa fa-envelope"></i></span>
                                <input type="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                <input type="password" name="password" placeholder="Contraseña" required />
                            </div>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                                <input type="password" name="password" placeholder="Repetetir Contraseña" required />
                            </div>
                            <div className="row clearfix">
                                <div className="col_half">
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                    <input type="text" name="name" placeholder="Nombre Completo" />
                                </div>
                                </div>
                                <div className="col_half">
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                                    <input type="text" name="name" placeholder="Apellidos Completos" required />
                                </div>
                                </div>
                            </div>
                                    <div className="input_field radio_option">
                                <input type="radio" name="radiogroup1" id="rd1"/>
                                <label htmlFor="rd1">Administrador</label>
                                <input type="radio" name="radiogroup1" id="rd2"/>
                                <label htmlFor="rd2">Suscriptor</label>
                                </div>
                            <input className="button" type="submit" value="Register" />
                            </form>
                        </div>
                        </div>
                    </div>
                    <p className="credit">¿ Ya tienes una cuenta creada ?<Link to="/auth/login">Ingresa a nuestra página desde aqui </Link></p>
                </div>
            </div>
        </div>
    )
}
