
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

export const RegisterScreen = () => {

    const { username,
        email,
        first_name,
        last_name,
        password1,
        password2,
        group,
        handleInputChangeRegister,
        handleGetRegisterUser, } =useAuth();

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
                            <div className="input_field"> <span><i  className="fa fa-user"></i></span>
                                    <input
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={handleInputChangeRegister}
                                    placeholder="Nombre De Usuario"
                                    required
                                    />
                                </div>
                            <div className="input_field"><span><i className="fas fa-envelope" style={{display: "flex", flexDirection: "column", marginTop:"35px"}}></i></span>
                                <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleInputChangeRegister}
                                placeholder="Email"
                                required
                                />
                            </div>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock" style={{display: "flex", flexDirection: "column", marginTop:"70px"}}></i></span>
                                <input
                                type="password"
                                name="password1"
                                value={password1}
                                onChange={handleInputChangeRegister}
                                placeholder="Contraseña"
                                required
                                />
                            </div>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock" style={{display: "flex", flexDirection: "column", marginTop:"105px"}}></i></span>
                                <input
                                type="password"
                                name="password2"
                                value={password2}
                                onChange={handleInputChangeRegister}
                                placeholder="Repetetir Contraseña"
                                required
                                />
                            </div>
                            <div className="row clearfix">
                                <div className="col_half">
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" style={{display: "flex", flexDirection: "column", marginTop:"140px"}}></i></span>
                                    <input
                                    type="text"
                                    name="first_name"
                                    value={first_name}
                                    onChange={handleInputChangeRegister}
                                    placeholder="Nombre Completo"
                                    required
                                    />
                                </div>
                                </div>
                                <div className="col_half">
                                <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user" style={{display: "flex", flexDirection: "column", marginTop:"175px"}}></i></span>
                                    <input
                                    type="text"
                                    name="last_name"
                                    value={last_name}
                                    onChange={handleInputChangeRegister}
                                    placeholder="Apellidos Completos" required
                                    />
                                </div>
                                </div>
                            </div>
                                <div
                                className="input_field radio_option"
                                >
                                <input
                                type="radio"
                                name="group"
                                id="rd1"
                                onChange={handleInputChangeRegister}
                                value="Administrador"
                                />
                                <label htmlFor="rd1">Administrador</label>
                                <input
                                type="radio"
                                name="group"
                                id="rd2"
                                onChange={handleInputChangeRegister}
                                value="Suscriptor"
                                />
                                <label htmlFor="rd2">Suscriptor</label>
                                </div>
                            <input
                            className="button"
                            type="submit"
                            value="Register"
                            onClick={(e)=>handleGetRegisterUser(username,email,first_name,last_name,password1,password2,group,e)}
                            />
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
