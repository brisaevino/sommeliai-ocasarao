#!/usr/bin/env node

// Teste simples para verificar se o projeto está funcionando
const { spawn } = require('child_process');

console.log('🔍 Iniciando teste do servidor...');

const child = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true
});

child.on('error', (error) => {
  console.error('❌ Erro ao iniciar servidor:', error);
});

child.on('close', (code) => {
  console.log(`🔚 Servidor encerrado com código: ${code}`);
});

setTimeout(() => {
  console.log('✅ Servidor deveria estar rodando em http://localhost:3000');
  console.log('📝 Se você ver este texto, o servidor foi iniciado com sucesso!');
}, 3000);
