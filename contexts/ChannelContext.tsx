import React from 'react';
import { createContext, useContext, useState } from 'react';
type Channel = {
    id: number;
    name: string;
};

interface ChannelContextData {
    channel: Channel | null;
    setChannelState: (channel: Channel) => void;
}

const ChannelContext = createContext<ChannelContextData>({} as ChannelContextData);

export const ChannelProvider: React.FC = ({ children }) => {
    const [channel, setChannel] = useState(null);

    function setChannelState(channel: Channel) {
        setChannel(channel);
    }

    return (
        <ChannelContext.Provider value={{ channel, setChannelState }}>
            {children}
        </ChannelContext.Provider>
    );
};

export const useChannel = () => {
    return useContext(ChannelContext);
};

export default ChannelContext;
