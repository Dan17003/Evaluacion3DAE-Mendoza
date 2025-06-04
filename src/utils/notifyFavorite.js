import { toast } from 'react-toastify';

export const notifyAdd = () => toast.success('Agregado a favoritos');
export const notifyRemove = () => toast.info('Removido de favoritos');