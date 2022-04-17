import { Link } from 'react-router-dom'
import { useCartContext } from "../context/CartContext"
import companyLogo from '../assets/img/turismo-min.png';
import CartWidget  from '../components/CartWidget';

const Navbar = () => {

	const { quantityItem } = useCartContext();

	return (
		<nav className="navbar navbar-expand-md navbar-light header__containerHeader">
			<div className="container-fluid justify-content-end">

				<button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="header__containerHeader__logoTitle">
					<a href="#">
						<img src={companyLogo} alt="Logo"
							className="header__containerHeader__logoTitle--logo" />
					</a>
					<h1 className="header__containerHeader--title">Agencia de Turismo</h1>
				</div>

				<div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">

					<ul className="nav navbar-nav menu">
						<li className="nav-item">
							<Link to="/" >
								<a className="nav-link" href="">
									<span className="material-icons home">home</span>
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="category/argentina" >
								<a className="nav-link"
									href=""><b>ARGENTINA</b></a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="Destinations" >
								<a className="nav-link"
									href=""><b>DESTINOS</b></a>
							</Link>
						</li>
						<li className="nav-item">
							<Link to="Offers" >
								<a className="nav-link"
									href=""><b>OFERTAS</b></a>
							</Link>
						</li>

						{quantityItem() > 0 ?
							<CartWidget /> : null
						}

						<li className="nav-item">
							<Link to="Contact" >
								<a className="nav-link" href=""><span
									className="material-icons email">email</span></a>
							</Link>
						</li>
					</ul>
				</div>
			</div >
		</nav >
	);
};

export default Navbar;
