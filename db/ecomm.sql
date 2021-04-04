--This is the main file for DB
-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2021 at 07:35 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecomm`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(40) NOT NULL,
  `name` varchar(100) NOT NULL,
  `file_path` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `updated-at` date NOT NULL DEFAULT current_timestamp(),
  `created-at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `file_path`, `description`, `price`, `updated-at`, `created-at`) VALUES
(25, 'mobile', 'product/qsGYXB7OXsr8BFlCVA3hZFoRf0ZDhGdSwiwga0Sb.png', 'best mobile', '300404', '2021-04-01', '2021-04-01'),
(26, 'NOKIA', 'product/xlOxj76qoVKenJam40plCctQQhdd3NRAjeFtdXkI.webp', 'NOKIA BEST MOBILE', '90', '2021-04-01', '2021-04-01'),
(27, 'sumsungA3', 'product/fyCkCY1hpci6ziEjom3HahCXEnCRcc9PbuoxqGW5.png', 'susmsung A3 best phone', '50000', '2021-04-01', '2021-04-01'),
(28, 'nokia2310', 'product/iB0jcPhJAreY5z90kih3vIlw2FufDCBxLrp24Klm.webp', 'nokia2310 mobile phone', '4000', '2021-04-03', '2021-04-03'),
(29, 'huawei phones', 'product/xgZwZNbjNqLIAQSPvZ79uS5DXKuTX1ng6f1gTN5u.jpg', 'Huawei phones one the best phone', '30000', '2021-04-03', '2021-04-03'),
(30, 'iphone12', 'product/qeriNDMigwg5Tia5kMdSB1xjiMCrfPh1z2IAdlYg.jpg', 'iphone12 latest  mobile phone', '350000', '2021-04-03', '2021-04-03'),
(31, 'iphone10', 'product/NRXBbDzqQ1YbNenQEIWsri25KQSwPH2uFTAt761x.png', 'iphone10', '99999', '2021-04-03', '2021-04-03');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(26, 'ali', 'shahmajid508@gmail.com', '$2y$10$dn.rZcV5Pnk02AnqQpXfKutt65o/JBwD3fjQS.yzkWDHFjqXSU3XK'),
(27, 'alzzzi', 'shahmajid508@gmail.com', '$2y$10$vfHb.txhUZzWYmDgIzUHQeuKHQGOj.z2GoyyzxuKcxDZ0vFue.wdi'),
(28, 'rashid', 'ali@gmail.com', '$2y$10$3fTNMQt7uxa5Wa5DGqznO.DWQ2TwwvcQyZpwl00syP1uabvFnTxPS'),
(35, 'rashid', 'm', '$2y$10$VXJ5ZCbe2NOxV1WDK9pbcOT1uMDqPr64x/spOfeOYR50T12ZMadKi'),
(36, 'rashid', 'm', '$2y$10$APcUQNw2RvV0utGY9OCKVuwQltZAZZBjQ9NaXbd3Gme0hs297I3XO'),
(37, 'rashid', 'm', '$2y$10$e2OBQLMq0tTfzTibRe87KuUy9tINNOE3jq7bf3tW0mIJgNhaaQl22'),
(38, 'majid', 'shah@gmail.com', '$2y$10$xheDDJOWhbmSjAxVRDhhWO7OiAq4We15ut7h1rT.Nrh/G.tWyNP/W'),
(39, 'majid', 'shah@gmail.com', '$2y$10$4477q8..jkHjFYfBnu6LzOeBw.71SIOS9nahirqj3wErJrskaCNxu'),
(40, 'majid', 'shah@gmail.com', '$2y$10$QVacejGa7G5t9RkWFNvnqeFQQqgi03fIef04eyZ3AU5K4tQPim8LK'),
(41, 'majid', 'shah@gmail.com', '$2y$10$Xcg4e16Zq4emuEeDo2ZX9OVQqMqb4ke2SgP59WkCMthbFndUwfjlm'),
(42, 'majid', 'shah@gmail.com', '$2y$10$hIjnIxE7tR8PJms1Wz6MX.lsf97Ml6e1R2Qh1WcjkL/6cLqpWzzcq'),
(43, 'zahid', 'zahid@gmail.com', '$2y$10$MNALjBCPiAcS/M7cpaQ8u.BZG.4bwVovGRzCSwzYZc7ASyUHEsU4u'),
(44, 'inam', 'inam@gmail.com', '$2y$10$O5M7OiAIdzdc7TgGRLVp5OBZFI1XF7Vty9qBC7WUPhkb8W2DBWzKS'),
(45, 'khalid', 'shah@gmail.com', '$2y$10$wRmw6xUsubVSwPP5tDNZ/uOSt4kBqTMkLjSeX3tGsYTTzwtsrLlpO'),
(46, 'zahid', 'shah@gmai.com', '$2y$10$to2D4Xj2f0RRN/u8HAATFe4rL9cVPaf4/CCATXNR6m5zKNOXMq6k6'),
(47, 'zahiddhsh', 'asd', '$2y$10$Ok94azST/5TCdEeBvrA0VOD3F0JkcF98vpIdKRzXTIJlCK9O0K.JK'),
(48, 'talha', 'talha@gmail.com', '$2y$10$KTtQkuHylDx24ehIeX93VOKfQZvS3zsCFFLEEMSa9gK0oE67rI0Me'),
(49, 'ikram', 'ikram@gmail.com', '$2y$10$6LTiKiHTvGM1FVmP4S8fb.0wldz4vuBhdVfMZpTu1/a6cW.leAtT2'),
(50, 'ikram', 'ikram@gmail.com', '$2y$10$8G39W8gakBne/mHwPJQk1.YtYR4NOrdfbMiRb3ePeo80v94DdHO1q'),
(51, 'ikram', 'ikram@gmail.com', '$2y$10$kcHRHi9A25rP0HE.7ABgPejOE/4ykQjdkR29i5uhn7O56abLsY63u'),
(53, 'xx', 'd', '$2y$10$o7MbmAFZ20tNTNr8fXUoOeZDrg8KaD.FGKPbMazF1wsNkagjgXQ8u'),
(54, 'abid', 'shhsh', '$2y$10$H4u7Ke7UzJkJzaJuXr1ZJO/U0eHqB0Nq8oTs5iP7jkpqqDApwuuVS'),
(56, 'a', 'c', '$2y$10$YAjiSUZZvbG2CVmErntN1uUrDUlRWiU1SMOeNt8BxbHjcBGVOaARG'),
(57, 'zahid', 'asff', '$2y$10$xg/Ts.qkhHALVYlEkFd2auPoFbQbFQUxqYxfPTVQiy.1eZU4l3SSW'),
(58, 'hamid', 'sha@gmail.com', '$2y$10$2dOTaBorUkqyxATU2Sqm.e2HsRxk35Qo7qg6X0kiLtH0cWjho1vCS'),
(59, 'majidaa', 'zahid', '$2y$10$TWQCKdqgsOnEVO2ga2Z3Q.Rl831gJBg0hNfWolsW.GF8zeKjcqDWq'),
(70, 'fdgfdg', 'wajid@gmail.com', '$2y$10$GxG.QcEgW3TFEiax9x8nvuAoA.XB1uADiP6fCmFpT/sNtSk4yJqGK'),
(71, 'fdgfdg', 'wajid@gmail.com', '$2y$10$hls1VGGlveQv3PSoCcv40uqVo5ipge1PgDFM7KZ1Sjb8fiYH5bl3O'),
(72, 'fdhfgdf', 'wajid@gmail.com', '$2y$10$wb64YVPwCpv2jebM8da67.kL1PwqKo.vOy4mZovNjaEJnBXtSd/Ni'),
(73, 'majid', 'majid123@gmail.com', '$2y$10$xJ/fWAJp5cvWqlyaDnR6NOF167.HWAD5LTco4QnUQIhPjHGUUR4oC'),
(74, 'zahod', 'admin', '$2y$10$xKJ.zaWjTmyPi/yiKjQbgemszlUZ4XBkze806wJP2.WZZVcybm2LS'),
(79, 'ali', 'sh@gmail.com', '$2y$10$AxUsz5i9msUdvs0Or9tIbugxrBKVrlpPOqCuE4TWDhYDPpCUHs7Ey'),
(80, 'talha', 'abc@gmail.com', '$2y$10$xv8uMG/d0BcK.7AduTfq8.eUXv5KdBXQnFVPssEp9ntmSsEy1XaXC'),
(81, 'faisal', 'abc@gmail.com', '$2y$10$XLtBQeF4AlYUSgXz.3UPzex0dr.gWNvtYUxxIWxz0YEsXES1v3sW2'),
(82, 'a', 'c', '$2y$10$ka8r.G8H1jpfri9H0O876uWiHPvJxlp3BZ86d7ko7kKavDLHb5yDG'),
(83, 'ahmad', 'a', '$2y$10$Ql/reHLRBZ7W1wwVk4Djruy2ajpzLT22vEiVCQuUuqkORffzr1DY2'),
(84, 'dada', '123@gmail.com', '$2y$10$bQWpFaqBVH9CTuNSTfSCeOLXh1c1uSw9YVXhRdr0ZPu92tE4qWXTq'),
(85, 'rehan', '123@gmail.com', '$2y$10$DjiXZa5G2RO5rDtAm4vVY.pMLYuHyT8ugekDepGdYjrp29X2CBTV6'),
(86, 'rehan', 'abc', '$2y$10$DEy33h3oq1nQ79EUc7ZhgepIpidIP5kKXoc8pRk8wwv9NUbL4JIfW'),
(87, 'zaman shah', '321@gmail.com', '$2y$10$Pr3CY1ippPgl2dj51c3KaeREytRWprzk0xOd1WquwEUwjgBSIdvzm');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
