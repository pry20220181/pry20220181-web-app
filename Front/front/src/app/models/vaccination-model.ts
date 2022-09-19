export class Vaccination {
    id: number | undefined;
    name: string | undefined;
    description: string | undefined;
    minTemperature: number | undefined;
    maxTemperature: number | undefined;
    vaccinationSchemes: [
        {
            vaccinationSchemeId: number | undefined;
            name: string | undefined;
            description: string | undefined;
            initialAge: number | undefined;
            finalAge: number | undefined;
            numberOfDoses: number | undefined;
            possibleEffectsPostVaccine: string | undefined;
            vaccineDoses: [
                {
                    vaccineDoseId: number | undefined;
                    doseNumber: number | undefined;
                    putWhen: string | undefined;
                }
            ] | undefined
        }
    ] | undefined
}