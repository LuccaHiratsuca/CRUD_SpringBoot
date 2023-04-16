import IApiBack from '../types/interfaceApiBack';
import { createContext} from 'react';

const contextUser = createContext<IApiBack>({id: 0, name: "", description: ""});


export default contextUser;