



export interface Section {
    title: string;
    sections: Array<string>;
}


export const sections: Array<Section> = [
    {
        title: 'Becas', sections: [
            '¿Pueden darme más información sobre las becas en áreas de tecnología e innovación?',
            '¿Existen becas para investigadores o proyectos de investigación?',
            '¿Hay becas disponibles para estudiantes internacionales?',
        ]
    },
    {
        title: 'Otra cosa', sections: [
            'Otra pregunta',
            'Lorem ipsum dolor sit amet, consectetur adipisicing',
            '¿Otro tipo de pregunta?'
        ]
    }
]