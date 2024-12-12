import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-1">
        <label className="text-sm text-gray-400">EMAIL OU USERNAME</label>
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="space-y-1">
        <label className="text-sm text-gray-400">SENHA</label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="remember"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="w-4 h-4 rounded border-gray-600 bg-transparent text-red-500 focus:ring-red-500"
        />
        <label htmlFor="remember" className="ml-2 text-sm text-gray-400">
          Lembrar login?
        </label>
      </div>
      <Button type="submit">ENTRAR</Button>
    </form>
  );
};

export default LoginForm;

