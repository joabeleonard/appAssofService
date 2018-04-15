-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 15-Abr-2018 às 15:57
-- Versão do servidor: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assof`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_acompanhamento_juridico`
--

CREATE TABLE `tb_acompanhamento_juridico` (
  `id_acompanhamento_juridico` int(11) NOT NULL,
  `titulo` text NOT NULL,
  `detalhes` text NOT NULL,
  `data` date NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_noticia`
--

CREATE TABLE `tb_noticia` (
  `id_noticia` int(11) NOT NULL,
  `titulo` text NOT NULL,
  `noticia` text NOT NULL,
  `data` date NOT NULL,
  `image` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tb_noticia`
--

INSERT INTO `tb_noticia` (`id_noticia`, `titulo`, `noticia`, `data`, `image`) VALUES
(1, 'GOVERNO DO ESTADO DO CEARÁ RESPONDE A ENTREGA DE GRATIFICAÇÕES PELOS OFICIAIS', 'O Governo do Estado do Ceará respondeu ao ofício enviado pela ASSOF deixando à disposição os cargos comissionados dos oficiais da Polícia Militar e do Corpo de Bombeiros Militar  para que possa ser implementada a melhoria salarial há quase dois anos prometida e estudada.\r\n\r\nDeclarou-se oportuna a contribuição dos oficiais, afirmando que se busca o respeito aos servidores estaduais.\r\n\r\nEm um Estado onde um Coronel recebe 52% (cinquenta em dois por cento) de um delegado especial (final da carreira), 75% (setenta e cinco por cento) de um delegado em início de carreira e ainda menos que um Agente Penitenciário em final de carreira, é totalmente contraproducente o aporte financeiro anual de mais de 154 (cento e cinquenta e quatro) milhões de reais para gratificações: por metas de redução da criminalidade; criadas pela lei orgânica da PMCE e CBMCE, e as das tropas especiais. Mantendo no oficialato, por pesaroso título, a atual pior remuneração no Brasil. \r\n\r\nDestaque-se, ainda, que um soldado militar estadual e um agente penitenciário começam a carreira com salários equivalentes, entretanto, embora o concurso de ambos exija a mesma escolaridade, o agente penitenciário finda a carreira recebendo o triplo dos vencimentos do militar estadual, ainda que o militar tenha chegado ao oficialato no posto de 2 tenente. Ressalte-se novamente: No Ceará, o agente penitenciário em final de carreira recebe mais do que um Coronel das corporações militares estaduais!\r\n\r\nAcreditamos, em face da abertura do diálogo do Governo do Estado, que se possa encontrar uma solução adequada para o reajuste salarial da PM e CBM do Ceará. Louvamos a atitude do Excelentíssimo Sr. Governador em ouvir as nossas sugestões para a solução do caso. Colocamos-nos à disposição para contribuir com o que for preciso.', '2018-04-14', 'assof anuversario BM.jpg'),
(2, 'Governador garante média à ASSOF e Comandante Geral se declara feliz com a associação', 'Hoje, na solenidade dos 90 anos do Corpo de Bombeiros Militar do Estado do Ceará, o Excelentíssimo Senhor Governador rompeu seu silêncio e falou publicamente na solenidade em alusão ao aniversário do CBMCE que iria cumprir o compromisso de pagar a média salarial aos militares estaduais. \r\n\r\nNa primeira oportunidade, o Presidente e o Vice-presidente da ASSOF foram ao encontro do governador, o saudaram e a o informaram que era exatamente isso que os oficiais queriam ouvir dele. Agora vamos iniciar as negociações e falar em datas. \r\n\r\nEm seguida a presidência conversou com Fernando Oliveira, Assessor da Exma. Vice-governadora Isolda, e com o Coronel Comandante Geral da PMCE. Com ambos a conversa foi bastante amigável. \r\n\r\nO Cel Cmt Geral PM Pinheiro disse que está feliz com a ASSOF e ainda nesta semana iremos voltar a nos encontrar. \r\n\r\nDiante destes fatos. ficou evidente que a jovem ASSOF já conquistou legitimidade e respeito, pois, todos os oficiais presentes no evento além das autoridades da Segurança Pública de nosso Estado presentes no evento reconheceram a ASSOF como entidade representativa dos oficiais.\r\n\r\nAlém de prestigiarmos um belíssimo evento em homenagem ao aniversário do Glorioso Corpo de Bombeiros Cearense, ainda tivemos excelentes notícias para a categoria.\r\n\r\nParabéns Corpo de Bombeiros pela data significativa!\r\n\r\nParabéns a todos que ajudaram a construir e acreditaram no sonho ASSOF. \r\n\r\nJá nascemos grandes!\r\n\r\nAvante Oficiais!\r\n', '2018-04-14', 'Novo Documento 12016081712505720601-00.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_usuario`
--

CREATE TABLE `tb_usuario` (
  `id_usuario` int(11) NOT NULL,
  `nome` text NOT NULL,
  `cpf` text NOT NULL,
  `senha` varchar(30) NOT NULL,
  `email` varchar(80) NOT NULL,
  `ficha` blob,
  `foto_usuario` blob
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `tb_usuario`
--

INSERT INTO `tb_usuario` (`id_usuario`, `nome`, `cpf`, `senha`, `email`, `ficha`, `foto_usuario`) VALUES
(1, 'Joabe', '04061698370', '12345', 'joabe.leonard.feitosa@gmail.com', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_acompanhamento_juridico`
--
ALTER TABLE `tb_acompanhamento_juridico`
  ADD PRIMARY KEY (`id_acompanhamento_juridico`);

--
-- Indexes for table `tb_noticia`
--
ALTER TABLE `tb_noticia`
  ADD PRIMARY KEY (`id_noticia`);

--
-- Indexes for table `tb_usuario`
--
ALTER TABLE `tb_usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_acompanhamento_juridico`
--
ALTER TABLE `tb_acompanhamento_juridico`
  MODIFY `id_acompanhamento_juridico` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tb_noticia`
--
ALTER TABLE `tb_noticia`
  MODIFY `id_noticia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tb_usuario`
--
ALTER TABLE `tb_usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
