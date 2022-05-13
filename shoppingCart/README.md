Frontend Teste

O teste consiste em um checkout simples contendo 3 passos (carrinho, pagamento e sucesso) Veja o Layout (https://projects.invisionapp.com/prototype/front-test-cji0j0khf005c1t0132358e8k)

Faça quando quiser/puder (madrugada, fim de semana, etc)

Ao Finalizar mande o link do github :)

Requerimentos
    Pixel perfect (nesse link, você pode inspecionar para ver espaçamentos, fonte, tamanho, etc)
    A aplicação precisa ser responsiva, utilizando o conceito de mobile-first. Use sua imaginação para entregar uma experiência boa no desktop.
    Renderize cada passo em uma URL única (lib de rotas).
Passo 1 - Carrinho:
    Consuma o esse endpoint(http://www.mocky.io/v2/5b15c4923100004a006f3c07) e liste os itens do carrinho, bem como o resumo do carrinho;
    Persista o conteúdo do JSON para ser usado nas próximas etapas;
Passo 2 - Pagamento:    
    Exiba um form com campos    de cartão de crédito com validação em cada campo;
    Habilite o botão de Finalizar Pedido apenas se o form esteja válido;
Passo 3 - Sucesso:
    Todo o conteúdo deverá ser exibido a partir dos dados persistidos;
Se atente em:
    Organização do código;
    Mensagens (em inglês);
    Composição/reutilização de componentes
    Testes unitários;
    O motivo de ter escolhido cada tech da stack;
    Como rodar sua aplicação ;)
Diferenciais:
    Split bundle por rota (cada step ter um bundle separado para otimizar a performance);
    CSS in JS;
    React;