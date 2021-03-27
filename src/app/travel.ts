export interface Travel {
    destination: string;
    title: string;
    description: string;
    startdates: Array<Date>;
    duration: number;
    price: number;
    img: string;
}

export interface SelectedTravel extends Travel { 
    selectedStartdate: Date;
    persons: number;
}
