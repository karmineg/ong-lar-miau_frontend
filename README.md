README - Frontend ONG Lar Miau 🐾
Este projeto faz parte da aplicação para a ONG Lar Miau, que se dedica ao resgate e apadrinhamento de gatos. O frontend foi construído utilizando React e tem como objetivo oferecer uma interface amigável e intuitiva para os usuários, facilitando o processo de apadrinhamento de gatos e a gestão de padrinhos.

Funcionalidades

Lista de Gatos: Apresenta uma lista de gatos disponíveis para apadrinhamento.
Formulário de Apadrinhamento: Coleta informações de padrinhos interessados.
Remover Gatos: Possibilidade de remover gatos que já foram adotados.
Atualização Automática: Atualização em tempo real da lista de gatos após apadrinhamento ou remoção, utilizando React Context API para gerenciamento de estado.
Integração com Backend: As operações de apadrinhamento e remoção estão conectadas ao backend, que gerencia as operações no banco de dados.

Tecnologias Utilizadas
React: Biblioteca JavaScript para construção de interfaces de usuário.
React Bootstrap: Biblioteca para facilitar a estilização dos componentes com responsividade.
JavaScript (ES6+): Utilizado para a lógica da aplicação.
Context API: Para gerenciamento de estado global (gatos e padrinhos).
CSS: Para estilização personalizada dos componentes.

Scripts Disponíveis
No diretório do projeto, você pode rodar os seguintes comandos:

npm start
Executa a aplicação em modo de desenvolvimento.
Abra http://localhost:3000 para ver a aplicação no navegador.

A página irá recarregar automaticamente ao fazer alterações no código.
Você também verá eventuais erros de lint no console.

npm test
Executa o test runner em modo interativo.
Veja a seção sobre testes em React para mais informações.

npm run build
Cria a aplicação otimizada para produção no diretório build.
O React será corretamente empacotado em modo de produção e otimizado para a melhor performance.

Os arquivos de saída serão minificados e os nomes de arquivo incluirão hashes.
Sua aplicação estará pronta para ser deployada!

Veja mais sobre deployment.

npm run eject
Nota: esta operação é irreversível.
Se você não estiver satisfeito com as ferramentas de build e configuração, pode usar eject a qualquer momento. Este comando irá copiar todos os arquivos de configuração e dependências diretas (como Webpack, Babel, ESLint, etc.) para o projeto, para que você tenha controle total sobre eles.
Não é necessário usar eject para a maioria dos projetos.

Instalação e Execução
Pré-requisitos
Node.js
NPM ou Yarn
