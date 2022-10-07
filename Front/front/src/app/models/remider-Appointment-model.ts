export class RemiAppo {
    reminderId: number | undefined;
    via: string | undefined;
    sendDate: string | undefined;
    parent: {
        parentId: number | undefined;
        firstname: string | undefined;
        lastname: string | undefined;
        email: string | undefined;

        vaccinationAppointment: {
            vaccinationAppointmentId: number | undefined;
            child: {
                childId: number | undefined;
                fullname: string | undefined;
                dni: string | undefined;
            },
            healthCenter: {
                healthCenterId: number | undefined;
                name: string | undefined;
                address: string | undefined;
            },
            appointmentDateTime: string | undefined;
            vaccines: [
                string | undefined
            ] | undefined
        }
    } | undefined
}