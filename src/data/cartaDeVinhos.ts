export type Vinho = {
  nome: string;
  tipo: "Espumante" | "Branco" | "Rosé" | "Tinto";
  origem: "Brasil" | "Argentina" | "Chile" | "Itália" | "Portugal";
};

export const cartaDeVinhos: Vinho[] = [
  // 🇧🇷 ESPUMANTES / BRASILEIROS
  { nome: "Chandon Réserve Brut", tipo: "Espumante", origem: "Brasil" },
  { nome: "Chandon Brut Rosé", tipo: "Espumante", origem: "Brasil" },
  { nome: "Fausto Brut", tipo: "Espumante", origem: "Brasil" },
  { nome: "Fausto Brut Rosé", tipo: "Espumante", origem: "Brasil" },
  { nome: "Miolo Reserva Chardonnay", tipo: "Branco", origem: "Brasil" },
  { nome: "Miolo Reserva Cabernet Sauvignon", tipo: "Tinto", origem: "Brasil" },
  { nome: "Miolo Reserva Pinot Noir", tipo: "Tinto", origem: "Brasil" },

  // 🇦🇷 ARGENTINOS
  { nome: "Alamos Chardonnay", tipo: "Branco", origem: "Argentina" },
  { nome: "Felino Chardonnay", tipo: "Branco", origem: "Argentina" },
  { nome: "Alamos Malbec Rosé", tipo: "Rosé", origem: "Argentina" },
  { nome: "Estancia Mendoza Varietal Malbec", tipo: "Tinto", origem: "Argentina" },
  { nome: "Esquinas de Argento Malbec", tipo: "Tinto", origem: "Argentina" },
  { nome: "Finca Terranostra Blend - Malbec, Bonarda e Tempranillo", tipo: "Tinto", origem: "Argentina" },
  { nome: "Fugitivo Malbec", tipo: "Tinto", origem: "Argentina" },
  { nome: "Alamos Malbec", tipo: "Tinto", origem: "Argentina" },
  { nome: "El Numerado Malbec", tipo: "Tinto", origem: "Argentina" },
  { nome: "Felino Malbec", tipo: "Tinto", origem: "Argentina" },
  { nome: "Amancaya", tipo: "Tinto", origem: "Argentina" },
  { nome: "Catena Malbec", tipo: "Tinto", origem: "Argentina" },
  { nome: "DV Catena Cabernet Malbec", tipo: "Tinto", origem: "Argentina" },
  { nome: "Alma Negra Pinot Noir", tipo: "Tinto", origem: "Argentina" },
  { nome: "Angelica Zapata Cabernet Franc", tipo: "Tinto", origem: "Argentina" },
  { nome: "Alma Negra Mistério", tipo: "Tinto", origem: "Argentina" },
  { nome: "El Enemigo Syrah Viognier", tipo: "Tinto", origem: "Argentina" },

  // 🇨🇱 CHILENOS
  { nome: "Vinãs Del Mar Riesling", tipo: "Branco", origem: "Chile" },
  { nome: "Vinãs Del Mar Chardonnay", tipo: "Branco", origem: "Chile" },
  { nome: "Flor de Los Andes Chardonnay", tipo: "Branco", origem: "Chile" },
  { nome: "Carmen Insigne Sauvignon Blanc", tipo: "Branco", origem: "Chile" },
  { nome: "Leyda Reserva Sauvignon Blanc", tipo: "Branco", origem: "Chile" },
  { nome: "7 Colores Rosé Cabernet Sauvignon/Syrah", tipo: "Rosé", origem: "Chile" },
  { nome: "Tarapacá Res. Cabernet Sauvignon", tipo: "Tinto", origem: "Chile" },
  { nome: "Flor de Los Andes Carménère", tipo: "Tinto", origem: "Chile" },
  { nome: "Casillero del Diablo Res. Cabernet Sauvignon", tipo: "Tinto", origem: "Chile" },
  { nome: "Casillero del Diablo Reserva Carmenère", tipo: "Tinto", origem: "Chile" },
  { nome: "Indomita Reserva Pinot Noir", tipo: "Tinto", origem: "Chile" },
  { nome: "Indomita Reserva Cabernet Sauvignon", tipo: "Tinto", origem: "Chile" },
  { nome: "Carmen Insigne Carménère", tipo: "Tinto", origem: "Chile" },
  { nome: "Flor de Los Andes Reserva Cabernet Sauvignon", tipo: "Tinto", origem: "Chile" },
  { nome: "Único de Chile Gran Reserva Cabernet Sauvignon", tipo: "Tinto", origem: "Chile" },
  { nome: "Único de Chile Gran Reserva Carmenérè", tipo: "Tinto", origem: "Chile" },
  { nome: "Valsierra Reserva Cabernet Sauvignon", tipo: "Tinto", origem: "Chile" },
  { nome: "Leyda Reserva Carmenére", tipo: "Tinto", origem: "Chile" },
  { nome: "Tarapacá Gran Reserva Cab. Sauvignon", tipo: "Tinto", origem: "Chile" },
  { nome: "7 Colores Gran Reserva Pinot Noir/Semillion", tipo: "Tinto", origem: "Chile" },
  { nome: "Montes Alpha Pinot Noir", tipo: "Tinto", origem: "Chile" },
  { nome: "Montes Alpha Carménère", tipo: "Tinto", origem: "Chile" },

  // 🇮🇹 ITALIANOS
  { nome: "Dal Maso La Gioia", tipo: "Tinto", origem: "Itália" },
  { nome: "Nero D'Avola", tipo: "Tinto", origem: "Itália" },
  { nome: "Miluna Rosso", tipo: "Tinto", origem: "Itália" },
  { nome: "Barone Montalto Acquerelo Nero D'Avola", tipo: "Tinto", origem: "Itália" },
  { nome: "Donato Sangiovese IGT", tipo: "Tinto", origem: "Itália" },
  { nome: "Montepulciano Plutone", tipo: "Tinto", origem: "Itália" },
  { nome: "Donato Primitivo IGT", tipo: "Tinto", origem: "Itália" },
  { nome: "AB.IMIS Vino Bianco", tipo: "Branco", origem: "Itália" },

  // 🇵🇹 PORTUGUESES
  { nome: "Casal Garcia", tipo: "Branco", origem: "Portugal" },
  { nome: "Paulo Laureano Vinhas Velhas Premium", tipo: "Tinto", origem: "Portugal" },
  { nome: "Messala Alvarinho", tipo: "Branco", origem: "Portugal" },
  { nome: "Casal Garcia Rosé", tipo: "Rosé", origem: "Portugal" },
  { nome: "Porca de Murça", tipo: "Tinto", origem: "Portugal" },
  { nome: "Periquita", tipo: "Tinto", origem: "Portugal" },
  { nome: "Sem Fim Douro Doc", tipo: "Tinto", origem: "Portugal" },
  { nome: "Rosario Selection", tipo: "Tinto", origem: "Portugal" },
  { nome: "Monte dos Perdigões Colheita Selecionada", tipo: "Tinto", origem: "Portugal" },
  { nome: "EA", tipo: "Tinto", origem: "Portugal" },
  { nome: "Intimista", tipo: "Tinto", origem: "Portugal" },
  { nome: "Montes de La Reserva", tipo: "Tinto", origem: "Portugal" },
  { nome: "Alma Minha Tinto", tipo: "Tinto", origem: "Portugal" }
];
