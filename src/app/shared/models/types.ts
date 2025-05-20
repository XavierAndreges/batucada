export interface Track {
    id: string,
    title: string; 
    folder: string, 
    files: File[]
};

export interface File { 
    name: string; 
    file: string, 
    isPlaying?: boolean,
    image?: string,
    isMultipiste?: boolean
};