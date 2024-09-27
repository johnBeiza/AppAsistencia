import { Usuario } from "./bd.models"; // Importar la interface de usuario

 //bd.models.ts
export const usuariosSimulados: Usuario[] = [
  {
    id: 1,
    nombreCompleto: 'Admin User',
    usuario: 'admin',
    clave: 'admin',
    telefono: '1234567890',
    tipo: 'profe'
  },
  {
    id: 2,
    nombreCompleto: 'Cesar Jeria',
    usuario: 'Cesar',
    clave: '1234',
    telefono: '0987654321',
    tipo: 'alumno'
  },
  {
    id: 3,
    nombreCompleto: 'John Beiza',
    usuario: 'John ',
    clave: '1234',
    telefono: '0987654325',
    tipo: 'alumno'
  },
];
