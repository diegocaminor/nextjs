// 🚨 Advertencias sobre extender el Document 🚨

// Ya que el Document se renderiza en servidor, los eventos como onClick no funcionarán.
// Los componentes de React fuera de <Main /> no serán inicializados por el navegador. No añadir lógica de la aplicación aquí o CSS personalizado (como styled-jsx). Si necesita componentes compartidos en todas sus páginas (como un menú o una barra de herramientas).
// getInitialPropsfunción de Document no se llama durante las transiciones del lado del cliente, ni cuando una página está optimizada estáticamente.
// Responder
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          {/** FavIcon */}
          {/** WebFont */}
          {/** stylesheets */}
          {/** scripts */}
        </Head>
        <body className="diego camino">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
