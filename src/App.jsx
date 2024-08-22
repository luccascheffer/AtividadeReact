 import Title from './components/Title';
import Description from './components/Description';
import Products from './components/Products';


const products = [
  {
    id: 1,
    title: "Copo de plástico transparente",
    description: "Copo de plástico simples.",
    imageUrl: "./public/CopoPlastico.png"
  },
  {
    id: 2,
    title: "Copo do DeadPool e Wolverine",
    description: "Copo do Deadpool e Wolverine para fãs.",
    imageUrl: "./public/CopoDeadpool.jpg"
  },
  {
    "id": 3,
    "title": "Copo de Plástico Azul",
    "description": "Copo de plástico, só que azul.",
    "imageUrl": "./public/CopoAzul.jpg"
    },
    {
    "id": 4,
    "title": "Copo caveira",
    "description": "Copo caveira foda.",
    "imageUrl": "./public/CopoCaveiraFoda.webp"
    },
    {
    "id": 5,
    title: "Porta copos Avião",
    description: "Porta copos de avião para amantes da aviação.",
    imageUrl: "./public/CopoAviao.webp"
    },
    {
    id: 6,
    "title": "Copo Pneus",
    "description": "Copo feito de pneus de plástico.",
    "imageUrl": "/CopoPneuFoda.webp"
    },
    {
    "id": 7,
    "title": "Caneca Privada",
    "description": "Caneca para amantes de banheiros.",
    "imageUrl": "/CanecaPrivadaFoda.jpg"
    },
    {
    "id": 8,
    "title": "Caneca do Santos",
    "description": "Caneca do melhor time existente.",
    "imageUrl": "/CanecaMelhorTime.webp"
    },
    {
    "id": 9,
    "title": "Caneca do Palmeiras",
    "description": "Caneca do time sem mundial.",
    "imageUrl": "/CanecaSemMundial.jpg"
    
    },
    {
    "id": 10,
    "title": "Caneca do ET Bilu",
    "description": "Caneca do ser mais inteligente do universo.",
    "imageUrl": "/CanecaConhecimento.jpg"
    },
    {
    "id": 11,
    "title": "Caneca Foda-se",
    "description": "Foda-se.",
    "imageUrl": "CaendaFodase.jpg"
    },
    {
    "id": 12,
    "title": "Caneca World's Best Boss",
    "description": "Caneca do Michael Scott.",
    "imageUrl": "/CanecaTheOfficeFoda.png"
    },
    {
    "id": 13,
    "title": "Copo Grande",
    "description": "De fato um belo Copo.",
    "imageUrl": "/Copasso.jpg"
    },
    {
    "id": 14,
    "title": "Copo Barril",
    "description": "Copo do Pula Pirata só que sem os furos.",
    "imageUrl": "/CopoChaves.webp"
    },
    {
    "id": 15,
    "title": "Taça gigante para vinho",
    "description": "Taça desnecessáriamente grande.",
    "imageUrl": "/Taçassa.jpg"
    },
    {
    "id": 16,
    "title": "Copo do Guns N' Roses",
    "description": "Copo do Guns.",
    "imageUrl": "/CopoGuns.webp"
    },
    {
    "id": 17,
    "title": "Copo Metal",
    "description": "Copo somente para metaleiros.",
    "imageUrl": "/CopoMetaleiro.webp"
    },
    {
    "id": 18,
    "title": "Caneca gigante de café",
    "description": "Caneca para viciados em café.",
    "imageUrl": "/Canecassa.jpg"
    },
    {
    
    "id": 19,
    "title": "Copo do Vasco?",
    "description": "Copo do gigante da colina KKKKKKKK.",
    "imageUrl": "/CanecaVasco.webp"
    },
    {
    "id": 20,
    "title": "Copo Foda",
    "description": "Copo Fodástico.",
    "imageUrl": "/CopoFoda.jpg"
    }
];

function App() {
  return (
    <div>
      <Title>Tela de Produtos</Title>
      <Description>Confira abaixo a nossa lista de produtos:</Description>
      <Products products={products} />
    </div>
  );
}

export default App;