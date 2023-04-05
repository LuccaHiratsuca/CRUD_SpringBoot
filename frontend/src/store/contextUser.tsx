import IApiBack from '../types/interfaceApiBack';
import { createContext} from 'react';

const UserContext = createContext<IApiBack>({id: 0, name: "", description: ""});


export default UserContext;