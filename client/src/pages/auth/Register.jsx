import { useEffect, useState } from "react";
import LayoutAuth from "../../components/LayoutAuth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../../utils/api/api";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigateTo = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post(`/register`, {
                email,
                password
            });
            navigateTo(`/login`)
        } catch (error) {
            console.log(error);
            if (error.response) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: error.response.data.message
                })
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: `Something went wrong`
                })
            }
        }
    }

    async function handleCredentialResponse(response) {
        try {
            const res = await api.post(`/google-login`, {}, {
                headers: {
                    google_token: response.credential
                }
            });
            console.log(response);
            console.log(res);
            localStorage.setItem(`access_token`, res.data.access_token);
            navigateTo(`/`)
        } catch (error) {
            console.error(error);
            if (error.response) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: error.response.data.message
                })
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: `Something went wrong`
                })
            }
        }
    }

    useEffect(() => {
        window.onload = function () {
            google.accounts.id.initialize({
                client_id: import.meta.env.VITE_CLIENTID,
                callback: handleCredentialResponse
            });
            google.accounts.id.renderButton(
                document.getElementById("buttonDiv"),
                { theme: "outline", size: "large" }
            );
            google.accounts.id.prompt();
        };
    }, []);

    return (
        <LayoutAuth>
            <div className="hidden 2xl:flex 2xl:w-1/2 h-screen justify-center items-center "  ><a
                title="Nintendo
, Public domain, via Wikimedia Commons"
                href="https://commons.wikimedia.org/wiki/File:International_Pok%C3%A9mon_logo.svg"
            >
                <img
                    width={512}
                    alt="International Pokémon logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/512px-International_Pok%C3%A9mon_logo.svg.png?20150121202211"
                />
            </a>
            </div>
            <div className="flex py-14 px-5 justify-center items-center 2xl:w-1/2 2xl:flex">
                <div className="nes-container with-title">
                    <h1 className="title">Register <i className="nes-icon trophy is-small"></i></h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 nes-field">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" id="exampleInputEmail1" className="nes-input" aria-describedby="emailHelp"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="mb-3 nes-field">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="nes-input"
                                id="exampleInputPassword1"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="mb-3 nes-btn is-primary">
                                Register
                            </button>
                        </div>
                    </form>
                    <div className="flex-col justify-center items-center gap-2">
                        <p>OR</p>
                        <div id="buttonDiv" />
                    </div>
                    <div className="flex py-4 text-xs font-thin">
                        <Link to="/login" className="nes-text is-primary">
                            Login Here
                        </Link>
                    </div>
                </div>

            </div>
        </LayoutAuth>
    );
};
export default Register;