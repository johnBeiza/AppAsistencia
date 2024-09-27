import { Usuario } from "./bd.models"; // Importar la interface de usuario

export const usuariosSimulados: Usuario[] = [
  {
    id: 1,
    nombreCompleto: 'Admin User',
    usuario: 'admin',
    clave: 'admin',
    telefono: '1234567890',
    tipo: 'Profesor'
  },
  {
    id: 2,
    nombreCompleto: 'Cesar Jeria',
    usuario: 'cesar',
    clave: '1234',
    telefono: '0987654321',
    tipo: 'Estudiante'
  },
  {
    id: 3,
    nombreCompleto: 'John Beiza',
    usuario: 'john',
    clave: '1234',
    telefono: '0987654325',
    tipo: 'Estudiante'
  },
];
