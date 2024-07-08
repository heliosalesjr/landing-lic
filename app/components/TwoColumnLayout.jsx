// app/components/TwoColumnLayout.jsx
import ToggleThemeSwitcher from './ToggleThemeSwitcher';

const TwoColumnLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Primeira Coluna */}
      <div className="relative w-1/2">
        <img
          src="/teachs.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 opacity-70"></div>
      </div>
      {/* Segunda Coluna */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="absolute top-4 right-4">
            <ToggleThemeSwitcher />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold px-8">Seja bem vindo, professor!</h1>
          <p className="mt-4 text-lg px-8">Aqui estão as informações para acessar a plataforma:</p>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
