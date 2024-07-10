import Image from 'next/image';
import ToggleThemeSwitcher from './ToggleThemeSwitcher';
import { Button, Card, CardBody } from '@nextui-org/react';
import './amatic.css';

const TwoColumnLayout = () => {
  return (
    <div className="flex h-screen bg-slate-200 dark:bg-slate-600">
      {/* Primeira Coluna */}
      <div className="relative w-1/2">
        <a
          href="http://www.beieducacao.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 left-4 z-10"
        >
          <Image
            src="/logo-white.png" // Caminho relativo à pasta 'public'
            alt="Logo BEĨ"
            width={70} // Largura desejada
            height={70}
            className="mx-8"
          />
        </a>
        <img
          src="/teachs.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 opacity-70"></div>
        
        {/* Novo conteúdo centralizado */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
          <h1 className="text-8xl font-bold text-white amatic max-w-sm mx-auto">APRENDENDO A LIDAR COM DINHEIRO</h1>
          <p className="mt-4 text-lg text-white bg-purple-600 rounded-md p-2 px-4 font-bold">Material do 6o ano</p>
        </div>
      </div>
      {/* Segunda Coluna */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="absolute top-4 right-4">
          <ToggleThemeSwitcher />
        </div>
        <div className="px-4">
          <Card className="p-4">
            <CardBody className="text-center">
              <h1 className="text-2xl font-black px-8 mt-4">Seja bem-vindo</h1>
              <p className="mt-4  px-8 mb-4">Aqui estão as informações para acessar a plataforma:</p>
              <p className="font-bold mb-4 px-8">
                Como Educador:<br />
                <span className="bg-slate-200 rounded-md px-2 font-normal text-sm dark:text-black dark:bg-slate-300">
                  paulo.20000000012@eb.foredu.com.br
                </span>
              </p>
              <p className="font-bold mb-4 px-8">
                Como Estudante:<br />
                <span className="bg-slate-200 rounded-md px-2 font-normal text-sm dark:text-black dark:bg-slate-300">
                  ariela.dias@aluno.eb.foredu.com.br
                </span>
              </p>
              <p className="font-bold mb-4 px-8">
                Como Gestor:<br />
                <span className="bg-slate-200 rounded-md px-2 font-normal text-sm dark:text-black dark:bg-slate-300">
                  patricia.siqueira@eb.foredu.com.br
                </span>
              </p>
              <p className="font-bold mb-4 px-8">
                A senha para acessar estes usuários é<br />
                <span className="bg-sky-200 rounded-md px-2 font-normal text-sm dark:text-black dark:bg-sky-300">
                  12345678!
                </span>
              </p>
              <Button className="bg-sky-500 text-lg text-white font-bold m-4 hover:bg-emerald-500 px-4">
                Acesse a Plataforma
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;


