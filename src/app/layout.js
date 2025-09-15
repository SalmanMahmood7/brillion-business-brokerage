import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'Aldrin Business - We Make It Happen For You',
  description: 'Professional business brokerage and M&A advisory services. Sell your business, buy a business, or grow your business with our expert guidance.',
  keywords: 'business broker, business for sale, buy business, sell business, M&A, business valuation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}