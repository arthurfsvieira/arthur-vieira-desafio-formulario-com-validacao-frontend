import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from '../utils/validation';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema),
  });
  
  const [statusMessage, setStatusMessage] = useState("");

  const onSubmit = (data) => {
    try {
      localStorage.setItem('memberData', JSON.stringify(data));
      setStatusMessage("Cadastro realizado com sucesso!");
      reset();
    } catch (error) {
      setStatusMessage("Falha ao cadastrar. Verifique os dados informados.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Cadastro de Membro</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700">Nome Completo</label>
          <input
            {...register('fullName')}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Digite seu nome completo"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">E-mail</label>
          <input
            {...register('email')}
            type="email"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Digite seu e-mail"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Telefone</label>
          <input
            {...register('phone')}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Digite seu telefone"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Cargo Pretendido</label>
          <select
            {...register('role')}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.role ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Selecione o cargo</option>
            <option value="frontend">Desenvolvedor Frontend</option>
            <option value="backend">Desenvolvedor Backend</option>
            <option value="fullstack">Desenvolvedor Full Stack</option>
            <option value="mobile">Desenvolvedor Mobile</option>
            <option value="software_dev">Desenvolvedor de Software</option>
            <option value="software_eng">Engenheiro de Software</option>
            <option value="software_arch">Arquiteto de Software</option>
            <option value="uiux_designer">UI/UX Designer</option>
            <option value="system_analyst">Analista de Sistemas</option>
            <option value="analyst_programmer">Analista Programador</option>
            <option value="devops">DevOps Engineer</option>
            <option value="data_engineer">Engenheiro de Dados</option>
            <option value="qa_engineer">QA Engineer</option>
            <option value="scrum_master">Scrum Master</option>
            <option value="product_owner">Product Owner</option>
          </select>
          {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">LinkedIn</label>
          <input
            {...register('linkedin')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="URL do LinkedIn (opcional)"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">GitHub</label>
          <input
            {...register('github')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="URL do GitHub (opcional)"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Cadastrar
        </button>
      </form>

      {statusMessage && (
        <div className="mt-4 text-center">
          <p className={`text-sm ${statusMessage.includes('sucesso') ? 'text-green-500' : 'text-red-500'}`}>
            {statusMessage}
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;
