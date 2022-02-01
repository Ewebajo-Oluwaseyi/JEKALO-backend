/**interface */
export interface userOut {
    first_name: string,
    last_name: string,
    username: string,
    date_of_birth: string,
    name_prefix: string
}

export type userIn = Omit<userOut, "name_prefix">