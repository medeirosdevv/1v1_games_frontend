import React, { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';


const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (data) => {
    console.log('Login:', data);
  };

  const handleRegister = (data) => {
    console.log('Register:', data);
  };

  return (
    <div className="min-h-screen w-full flex">
      {/* Left panel with form */}
      <div className="w-[480px] bg-black/90 p-12 flex flex-col justify-between space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-12 text-red-500">1v1 Games</h1>
          {isLogin ? (
            <LoginForm onSubmit={handleLogin} />
          ) : (
            <RegisterForm onSubmit={handleRegister} />
          )}
        </div>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-[#5865F2] text-white rounded hover:bg-[#4a54d9] transition-colors">

            Conectar com Discord
          </button>
          <div className="flex justify-between text-sm text-gray-500">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="hover:text-white transition-colors"
            >
              {isLogin ? 'Criar conta' : 'Já tenho uma conta'}
            </button>
            <button className="hover:text-white transition-colors">
              Configurações
            </button>
          </div>
        </div>
      </div>
      
 
      <div 
        className="flex-1 bg-[url('/valorant-jett.jpg')] bg-cover bg-center"
        style={{
          boxShadow: 'inset 100px 0 100px -100px #000000'
        }}
      />
    </div>
  );
};

export default Auth;

