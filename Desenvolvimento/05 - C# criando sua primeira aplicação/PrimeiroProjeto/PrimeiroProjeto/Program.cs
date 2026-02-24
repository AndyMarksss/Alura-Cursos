// Screen sound
string mensagemDeBoasVindas = "Boas-vindas ao Screen Sound";

// Exibir a mensagem de boas-vindas
void ExibirMensagemDeBoasVindas()
{
    // Exibir a mensagem de boas-vindas com arte ASCII
    Console.WriteLine(@"
░██████╗░█████╗░██████╗░███████╗███████╗███╗░░██╗  ░██████╗░█████╗░██╗░░░██╗███╗░░██╗██████╗░
██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝████╗░██║  ██╔════╝██╔══██╗██║░░░██║████╗░██║██╔══██╗
╚█████╗░██║░░╚═╝██████╔╝█████╗░░█████╗░░██╔██╗██║  ╚█████╗░██║░░██║██║░░░██║██╔██╗██║██║░░██║
░╚═══██╗██║░░██╗██╔══██╗██╔══╝░░██╔══╝░░██║╚████║  ░╚═══██╗██║░░██║██║░░░██║██║╚████║██║░░██║
██████╔╝╚█████╔╝██║░░██║███████╗███████╗██║░╚███║  ██████╔╝╚█████╔╝╚██████╔╝██║░╚███║██████╔╝
╚═════╝░░╚════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░╚══╝  ╚═════╝░░╚════╝░░╚═════╝░╚═╝░░╚══╝╚═════╝░");
    // Exibir a mensagem de boas-vindas armazenada na variável "mensagemDeBoasVindas"
    Console.WriteLine(mensagemDeBoasVindas);
}

// Exibir as opções do menu para o usuário
void ExibirOpcoesDoMenu()
{
    // Exibir as opções do menu para o usuário
    Console.WriteLine("\nDigite 1 para registrar uma banda");
    Console.WriteLine("Digite 2 para mostrar todas as bandas");
    Console.WriteLine("Digite 3 para avaliar uma banda");
    Console.WriteLine("Digite 4 para exibir a média de uma banda");
    Console.WriteLine("Digite -1 para sair");

    // Solicitar ao usuário para que escolha uma opção do menu e armazenar a escolha em uma variável
    Console.Write("\nDigite a opção desejada: ");
    // Ler a opção escolhida pelo usuário e armazenar em uma variável
    string opcaoEscolhida = Console.ReadLine()!;
    // Converter a opção escolhida para um número inteiro
    int opcaoEscolhidaNumerica = int.Parse(opcaoEscolhida);

    // Utilizar um 'switch' para verificar qual opção foi escolhida pelo usuário e exibir uma mensagem correspondente
    switch (opcaoEscolhidaNumerica) 
    {
        //Utiliza o 'case' para cada opção do menu, exibindo uma mensagem correspondente à opção escolhida pelo usuário
        // Utiliza o 'break' para encerrar cada 'case' e evitar que o código continue executando os próximos 'case' mesmo que a opção escolhida seja diferente
        case 1: Console.WriteLine("\nVocê escolheu a opção " + opcaoEscolhidaNumerica);
            break;
        case 2: Console.WriteLine("\nVocê escolheu a opção " + opcaoEscolhidaNumerica);
            break;
        case 3: Console.WriteLine("\nVocê escolheu a opção " + opcaoEscolhidaNumerica);
            break;  
        case 4: Console.WriteLine("\nVocê escolheu a opção " + opcaoEscolhidaNumerica);
            break;
        case -1: Console.WriteLine("\nAdeus!!");
            break;
        default: Console.WriteLine("Opção inválida");
            break;
        // Utiliza o 'default' para exibir uma mensagem de erro caso o usuário escolha uma opção inválida, ou seja, que não esteja listada no menu
    }

}

// Chamar as funções para exibir a mensagem de boas-vindas e as opções do menu para o usuário
ExibirMensagemDeBoasVindas();
ExibirOpcoesDoMenu();