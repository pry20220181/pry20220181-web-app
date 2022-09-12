export class Parent{
    dni: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    password: string | undefined;
    telephone: string | undefined;
    ubigeoId: number | undefined;
    relationship: string | undefined;
    children: [
        {
            dni: string | undefined;
            firstName: string | undefined;
            lastName: string | undefined;
            birthdate: string | undefined;
            gender: string | undefined;
        }
    ] | undefined
}