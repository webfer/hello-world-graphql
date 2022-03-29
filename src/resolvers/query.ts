import { IResolvers } from "@graphql-tools/utils";

const query: IResolvers = {
    Query: {
        hola(): string {
            return 'Hola mundo!'
        },
        holaConNombre( __:void, { nombre } ): string {
            return `Hola mundo ${nombre}`;
        },
        holaAlCursoGraphQL(): string {
            return 'Hola mundo en el curso GrahQL!!';
        }
}
}

export default query;