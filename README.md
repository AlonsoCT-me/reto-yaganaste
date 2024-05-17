
### Resumen General

Esta aplicación es una página web que muestra una lista de bancos obtenida desde una API. Está dividida en tres archivos principales: `page.tsx`, `BankList.tsx` y `bank.ts`.

### Archivos y su Función

1.  `page.tsx`:

    -   Propósito: Obtener la lista de bancos desde una API y mostrarla en la página.
    -   Funcionamiento:
        -   `getBanks`: Esta función hace una llamada a la API (`https://dev.obtenmas.com/catom/api/challenge/banks`) para obtener los datos de los bancos. Usa `fetch` para realizar la solicitud y devuelve los datos en formato JSON.
        -   Componente `Home`: Este es el componente principal que se exporta. Llama a `getBanks` para obtener los datos de los bancos y luego renderiza el componente `BankList`, pasándole los bancos obtenidos como propiedad (`props`).
2.  `BankList.tsx`:

    -   Propósito: Mostrar la lista de bancos en un formato bonito.
    -   Funcionamiento:
        -   Props: El componente recibe una lista de bancos (`banks`) como propiedad.
        -   Condicional: Si la lista de bancos está vacía o no es un array, muestra un mensaje indicando que no hay bancos registrados.
        -   Renderizado: Si hay bancos, los recorre y muestra cada uno en un elemento de lista (`<li>`), incluyendo su logo, nombre, descripción, años de antigüedad y un enlace a su sitio web.
3.  `bank.ts`:

    -   Propósito: Definir el tipo de datos que representa un banco.
    -   Funcionamiento:
        -   Interfaz `Bank`: Define la estructura de un objeto banco con las propiedades: `bankName` (nombre del banco), `description` (descripción del banco), `age` (años de antigüedad), y `url` (enlace al sitio web del banco).

### Flujo de Datos

1.  Cuando la página principal (`Home`) se carga, llama a la función `getBanks` para obtener los datos de los bancos desde la API.
2.  La función `getBanks` realiza una solicitud a la API y devuelve los datos en formato JSON.
3.  El componente `Home` recibe estos datos y los pasa como propiedad al componente `BankList`.
4.  `BankList` recibe la lista de bancos y los muestra en la página, o muestra un mensaje si no hay bancos.


## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
