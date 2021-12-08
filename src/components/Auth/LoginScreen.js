
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const LoginScreen = () => {

    const { userName,
        lEmail,
        password,
        handleInputChangeLogin,
        handleGetLoginUser,
        handleClearRegisterUser } =useAuth();

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
                                    <input
                                    type="text"
                                    name="userName"
                                    onChange={handleInputChangeLogin}
                                    value={userName}
                                    placeholder="Nombre De Usuario"
                                    />
                                </div>
                            <div className="input_field"><span><i className="fas fa-envelope" style={{display: "flex", flexDirection: "column", marginTop:"35px"}}></i></span>
                                <input
                                type="email"
                                name="lEmail"
                                onChange={handleInputChangeLogin}
                                value={lEmail}
                                placeholder="Email"
                                required
                                />
                            </div>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock" style={{display: "flex", flexDirection: "column", marginTop:"70px"}}></i></span>
                                <input
                                type="password"
                                name="password"
                                onChange={handleInputChangeLogin}
                                value={password}
                                placeholder="Contraseña" required
                                />
                            </div>
                            <input
                            className="button"
                            type="submit"
                            value="Ingresar"
                            onClick={(e)=>handleGetLoginUser(userName,lEmail,password,e)}
                            />
                            </form>
                        </div>
                        </div>
                    </div>
                <p className="credit">¿ No tienes una cuenta ? <Link to="/auth/register" onClick={handleClearRegisterUser}>Create una aqui</Link></p>
                </div>
            </div>
        </div>
    )
}