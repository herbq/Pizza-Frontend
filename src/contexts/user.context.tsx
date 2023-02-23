import React, { ReactNode, useState } from "react";
import { IUser } from "../interfaces/user.interface";


export const UserContext = React.createContext<IUser>({ user: null, setUser: () => { } });

const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<string | null>(null);

    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
}

export default UserProvider;