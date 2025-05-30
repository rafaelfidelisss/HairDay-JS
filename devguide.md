# Passo a passo

## Manipulando o formulário
1. Definimos os horários de atendimento em uma lista em um arquivo separado;

2. Criamos o arquivo main.js para importar todas as funções e estilos;

3. Criamos o arquivo submit.js para o evento de submit do form;
4. Formatamos o input de data definindo a data atual e prevenindo agendamentos no passado;

5. Criamos o arquivo page-load.js e capturamos o evento de loading da página para chamar a função que exibe os horários disponíveis e os agendamentos do dia quando a página estiver pronta;

6. Criamos o arquivo load.js para criar a função que exibe os horários e agendamentos do dia;

7. Criamos o arquivo hours-load.js para criar a função que exibe os horários disponíveis e chamamos ela no load.js;
8. Importamos a lista de horas e usando map selecionamos as horas:
  - Separamos elas pelo ":" usando split;
  - Desestruturamos em uma const para pegar somente os valores que ficaram na primeira posição dos arrays;
9. Adicionamos a hora na data e verificamos se a data é no passado usando isBefore;
10. Retornamos as horas disponíveis, baseado na hora atual;

11. No load.js, selecionamos o input de data, obtemos a data (valor do input) e passamos como parâmetro da função, dentro de um objeto;

12. No hours-load.js, renderizamos os elementos de cada horário, usando forEach e desestruturando nos parâmetros, e de maneira condicional adicionamos as classes para as horas disponíveis e ocupadas;
12. Criamos uma função para adicionar o header com os nomes dos períodos do dia, acima do primeiro horário de cada período;

13. Criamos o arquivo hours-click para adicionar o evento de clique somente para os horários disponíveis, e chamamos a função dentro de hours-load;
14. No evento de clique, removemos a classe selected de todas as horas, e adicionamos somente na hora clicada;

15. No submit.js, iniciamos um try já tratando de possíveis exceções com catch;
16. Recuperamos do input o nome do cliente, já usando trim para retirar espaços indesejados e adicionamos um alerta usando if, para caso o nome seja inválido;
18. Recuperamos o horário selecionado, e também adicionamos um alerta para caso não tenha nenhum horário selecionado;
19. Recuperamos somente a hora novamente, para adicionar na data selecionada;
20. Geramos um id para o agendamento, usando newDate().getTime().toString();

21. Criamos o arquivo date-change.js, onde selecionamos a data do input;
22. Criamos uma função para recarregar a lista de horários quando a data mudar, usando onchange;

23. No hours-load.js, limpamos a lista de horários, definindo ela como uma string vazia como primeiro passo da função;

## Iniciando integração com a API
1. Criamos a pasta services para colocar as funcionalidades da API;
2. Criamos o arquivo api-config.js e definimos o endereço da API em uma const;

3. Criamos o arquivo schedule-new.js para criar a função assíncrona que cria um novo agendamento, já desestruturando os dados do agendamento como parâmetros; 
4. Abrimos um try e já tratamos possíveis exceções com o catch;
5. Usando await fetch definimos a rota onde serão registrados os agendamentos na API;
6. Em seguida configuramos a requisição dentro de um objeto, definindo o método como post, o content type e o corpo da requisição com JSON.stringify nos dados;
7. No submit.js, chamamos a função para registrar os agendamentos na API;

8. Criamos o arquivo schedule-fetch-by-day.js, para criar a função que exibe os agendamentos na tela;
9. Iniciamos um try e já tratamos possíveis exceções com catch;
10. Usando await fetch fazemos a requisição para a rota dos agendamentos;
11. Convertemos a resposta para json, usando await também;
12. Filtramos os agendamentos pelo dia selecionado, comparando os dados com dayjs isSame;
13. Retornamos os dados filtrados;
14. Chamamos a função no load.js, colocando em uma const;

15. Criamos o arquivo show.js, para criar a função que renderiza os agendamentos;
16. Chamamos a função no load.js;
17. Buscamos do html as listas dos períodos do dia;
18. Iniciamos um try e já lidamos com possíveis exceções com catch;
19. Começamos limpando todas as listas, por garantia;
20. Percorremos a lista dos agendamentos usando forEach, para criar cada elemento no período correto;
21. Adicionamos o id do agendamento;
22. Formatamos a hora do agendamento pelo dayjs;
23. Atribuímos os dados do agendamento aos novos elementos;
24. Criamos o ícone de cancelar o agendamento;
25. Pegamos somente a hora do agendamento, e usando if else adicionamos no período correto, com appendChild;

26. No load.js, passamos os agendamentos como parâmetro da função que renderiza as horas disponíveis;
27. No hours-load.js, criamos a lógica para bloquear horários já agendados:
- Usando map, percorremos a lista dos horários agendados;
- Recuperamos uma nova lista somente com os horários ocupados;
28. Verificamos se o horário está na lista de horários ocupados, junto com a verificação do passado;

29. Chamamos a função que recarrega os agendamentos após criar um agendamento;
30. Limpamos o input e a seleção de hora após fazer um agendamento;

31. Criamos o arquivo cancel.js para criar a função que deleta um agendamento;
32. Capturamos o evento de clique na lista, e verificamos se o clique foi no ícone de deletar;
33. Pegamos o elemento pai do botão clicado e recuperamos o id do elemento;
34. Criamos uma confirmação para excluir;

35. Criamos o arquivo schedule-cancel.js na pasta services, para criar a função de deletar;
36. Usando try catch, fazemos a requisição para deletar o agendamento, passando o id;

37. Chamamos a função que deleta o agendamento e em seguida a função que recarrega a lista de agendamentos.