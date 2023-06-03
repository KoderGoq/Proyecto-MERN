import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthLayout from './layout/authLayout';
import Login from './paginas/Login';
import ConfirmarCuenta from './paginas/ConfirmarCuenta';
import OlvidePassword from './paginas/OlvidePassword';
import RegistrarCuenta from './paginas/RegistrarCuenta';
import { NuevoPassoword } from './paginas/NuevoPassoword';
import { AuthProvider } from './context/AuthProvider';

function App() {

	return (
		<BrowserRouter>
			<AuthProvider>
				<Routes>
					<Route path='/' element={<AuthLayout />}>
						<Route index element={<Login />} />
						<Route path='registrar' element={<RegistrarCuenta />} />
						<Route path='olvide-password' element={<OlvidePassword />} />
						<Route path='olvide-password/:token' element={<NuevoPassoword />} />
						<Route path='confirmar/:id' element={<ConfirmarCuenta />} />
					</Route>
				</Routes>
			</AuthProvider>
		</BrowserRouter >
	)
}

export default App