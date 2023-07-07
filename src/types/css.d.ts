declare module '*.scss' {
    const scssstyles: { [key: string]: string };
    export = scssstyles;
}

declare module '*.css' {
    const styles: { [key: string]: string };
    export = styles;
}