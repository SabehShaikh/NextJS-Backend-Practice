
export const metadata = {
    title: "Shop Page",
    description: "This is the shop page",
  };

export default function Layout({children}) {
    return (
        <div>
            <h1>Shop Layout</h1>
            {children}
        </div>
    );

}