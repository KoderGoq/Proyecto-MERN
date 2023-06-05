import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthLayout from './layout/authLayout';
import RutaProtegida from './layout/RutaProtegida';

import Login from './paginas/Login';
import ConfirmarCuenta from './paginas/ConfirmarCuenta';
import OlvidePassword from './paginas/OlvidePassword';
import RegistrarCuenta from './paginas/RegistrarCuenta';
import { NuevoPassoword } from './paginas/NuevoPassoword';
import AdministrarPacientes from './paginas/AdministrarPacientes';
import EditarPerfil from './paginas/EditarPerfil';
import CambiarPassword from './paginas/CambiarPassword';

import { AuthProvider } from './context/AuthProvider';
import { PacientesProvider } from './context/PacientesProvider';

function App() {

	return (
		<BrowserRouter>
			<AuthProvider>
				<PacientesProvider>
					<Routes>
						<Route path='/' element={<AuthLayout />}>
							<Route index element={<Login />} />
							<Route path='registrar' element={<RegistrarCuenta />} />
							<Route path='olvide-password' element={<OlvidePassword />} />
							<Route path='olvide-password/:token' element={<NuevoPassoword />} />
							<Route path='confirmar/:id' element={<ConfirmarCuenta />} />
						</Route>

						<Route path='/admin' element={<RutaProtegida />}>
							<Route index element={<AdministrarPacientes />} />
							<Route path='perfil' element={<EditarPerfil />} />
							<Route path='cambiar-password' element={<CambiarPassword />} />
						</Route>
					</Routes>
				</PacientesProvider>
			</AuthProvider>
		</BrowserRouter >
	)
}

export default App