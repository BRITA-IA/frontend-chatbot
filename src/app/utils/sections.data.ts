



export interface Section {
    title: string;
    sections: Array<string>;
}


export const sections: Array<Section> = [
    {title: 'Becas', sections: [
        'Me puedes decir que tipo de becas hay',
        'Me puedes decir en que escuela esta la beca X',
        'Que Escuelas tiene becas',
    ]},
    {title: 'Escuelas', sections: [
        '¿Que escuelas hay disponibles?',
        'Lorem ipsum dolor sit amet, consectetur adipisicing',
        '¿Que escuelas tienen becas?'
    ]}
]