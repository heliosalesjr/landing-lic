import Image from 'next/image';
import ToggleThemeSwitcher from './ToggleThemeSwitcher';
import { Button, Card, CardBody } from '@nextui-org/react';
import './amatic.css';

const TwoColumnLayout = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-200 dark:bg-slate-600">
      {/* Primeira Coluna */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-sky-500 opacity-70"></div>
        
        {/* Novo conteúdo centralizado */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center ">
        <Image 
            src="/6ocovers.png" 
            alt="Aprendendo a lidar com dinheiro" 
            width={500} 
            height={500} 
            className="w-64 sm:w-64 md:w-64 lg:w-80 xl:w-96"
          />
          <p className="mt-4 text-3xl text-white rounded-md p-2 px-4 font-bold">Material do 6o ano</p>
        </div>
      </div>
      {/* Segunda Coluna */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center h-1/2 md:h-full">
        <div className="hidden md:block absolute top-4 right-4">
          <ToggleThemeSwitcher />
        </div>
        <div className="px-4">
          <Card className="p-4">
            <CardBody className="text-center">
              <h1 className="text-2xl font-black px-8 mt-4">Seja bem-vindo</h1>
              <p className="mt-4 px-8 mb-4">Aqui estão as informações para acessar a plataforma:</p>
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
              <Button className="bg-purple-500 text-lg text-white font-bold m-4 hover:bg-sky-500 mx-8">
                Acesse a Plataforma
              </Button>
                {/* Adicionando a imagem abaixo do botão */}
                <div className="mt-4">
                  <Image 
                    src="/pr-logo.png" // Atualize o caminho para o seu logo
                    alt="Logo" 
                    width={200} 
                    height={100} 
                    className='mx-auto'
                  />
                </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;




