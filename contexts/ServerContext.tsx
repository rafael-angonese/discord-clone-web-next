import React from 'react';
import { createContext, useContext, useState } from 'react';
type Server = {
    id: number;
    name: string;
};

interface ServerContextData {
    server: Server | null;
    setServerState: (server: Server) => void;
}

const ServerContext = createContext<ServerContextData>({} as ServerContextData);

export const ServerProvider: React.FC = ({ children }) => {
    const [server, setServer] = useState(null);

    function setServerState(server: Server) {
        setServer(server);
    }

    return (
        <ServerContext.Provider value={{ server, setServerState }}>
            {children}
        </ServerContext.Provider>
    );
};

export const useServer = () => {
    return useContext(ServerContext);
};

export default ServerContext;
