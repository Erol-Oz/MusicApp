import { render, screen } from '@testing-library/react';
import TopArtist from "./components/TopArtist"

test('renders learn react link', () => {
  render(<TopArtist />);
  const h1 = screen.getByText(/Top Artists/i);
  expect(h1).toBeInTheDocument();
});

// **********************************************
// Merhaba

// Testi çalıştırmaya çalıştığınızda düzgün çalışmadığını göreceksiniz,testleri doğru şekilde yazmış olmama rağmen, aldığım bu hata ve çözemediğim bir diğer hata yüzünden testleri doğru şekilde yürütemedim.Test yazmaya hakimim ve daha öncesinde uzun süre cypress ile testler yazdım.Projemi daha öncesinde teslim edecektim lakin bu sorunu çözmeye çalıştığım için daha erken teslim edemedim.

//***********************************************
