export type Property = {
  id: number
  title: string
  location: string
  type: string
  transaction: string
  price: string
  surface: string
  rooms: string
  image: string
  featured?: boolean
  summary?: string
  description?: string[]
  highlights?: string[]
  specs?: { label: string; value: string }[]
  gallery?: string[]
  neighborhood?: string
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=85`

export const properties: Property[] = [
  {
    id: 1,
    title: 'Villa contemporaine avec piscine',
    location: 'Hammamet Nord',
    type: 'Villa',
    transaction: 'Vente',
    price: '1 280 000 TND',
    surface: '320 m²',
    rooms: '5 pièces',
    image: img('photo-1600607687939-ce8a6c25118c'),
    featured: true,
    summary:
      'Une villa contemporaine ouverte sur sa piscine, entre le calme de Hammamet Nord et la lumière de la côte.',
    description: [
      'À Hammamet Nord, cette villa de 320 m² déploie cinq pièces autour d’un séjour vitré qui s’ouvre directement sur la piscine. Les volumes sont amples, les lignes contemporaines, et chaque pièce profite du jardin comme d’une pièce de plus.',
      'Quatre chambres, dont une suite parentale, se partagent trois salles de bain. La cuisine d’été prolonge les repas au bord de l’eau, et un garage double abrite les voitures à l’abri du soleil.',
      'Maison & Co l’a retenue pour la justesse de son architecture, la qualité de son extérieur et une adresse résidentielle à quelques minutes des plages.',
    ],
    highlights: [
      'Piscine privée',
      'Jardin planté',
      'Suite parentale',
      'Cuisine d’été',
      'Garage double',
      'Proche des plages',
    ],
    specs: [
      { label: 'Surface', value: '320 m²' },
      { label: 'Pièces', value: '5' },
      { label: 'Chambres', value: '4' },
      { label: 'Salles de bain', value: '3' },
      { label: 'Terrain', value: '600 m²' },
      { label: 'Piscine', value: 'Privée' },
      { label: 'Exposition', value: 'Sud' },
      { label: 'Stationnement', value: 'Garage double' },
    ],
    gallery: [
      img('photo-1600607687939-ce8a6c25118c'),
      img('photo-1600585153490-76fb20a32601'),
      img('photo-1600596542815-ffad4c1539a9'),
      img('photo-1600210491892-03d54c0aaf87'),
    ],
    neighborhood:
      'Hammamet Nord reste un secteur résidentiel recherché, entre pinèdes, villas et accès rapide aux plages. Commerces, cafés et promenade du littoral se rejoignent sans quitter le calme du quartier.',
  },
  {
    id: 2,
    title: 'Appartement lumineux — Sahloul',
    location: 'Sousse',
    type: 'Appartement',
    transaction: 'Vente',
    price: '485 000 TND',
    surface: '145 m²',
    rooms: '3 pièces',
    image: img('photo-1600566753190-17f0baa2a6c3'),
    featured: true,
    summary:
      'Un appartement élégant à Sahloul, lumineux et calme, dans un quartier résidentiel de Sousse.',
    description: [
      'Au cœur de Sahloul, cet appartement de 145 m² déploie trois pièces baignées de lumière et une terrasse ouverte sur le quartier. Les volumes sont calmes, les finitions soignées, et chaque pièce profite d’une orientation généreuse.',
      'Le séjour s’ouvre largement sur la terrasse, la cuisine est équipée et prête à vivre, et les deux chambres conservent le silence d’une résidence discrète. Une place de parking et un ascenseur complètent un quotidien simple et confortable.',
      'Maison & Co l’a retenu pour la justesse de son agencement et le caractère serein de l’adresse — à quelques minutes des commerces, des écoles et des axes vers Sousse.',
    ],
    highlights: [
      'Séjour lumineux',
      'Terrasse de 18 m²',
      'Cuisine équipée',
      'Résidence gardiennée',
      'Ascenseur et parking',
      'Quartier résidentiel',
    ],
    specs: [
      { label: 'Surface', value: '145 m²' },
      { label: 'Pièces', value: '3' },
      { label: 'Chambres', value: '2' },
      { label: 'Salles de bain', value: '2' },
      { label: 'Étage', value: '4e, avec ascenseur' },
      { label: 'Terrasse', value: '18 m²' },
      { label: 'Exposition', value: 'Sud-ouest' },
      { label: 'Stationnement', value: '1 place' },
    ],
    gallery: [
      img('photo-1600566753190-17f0baa2a6c3'),
      img('photo-1600210492486-724fe5c67fb0'),
      img('photo-1600566753086-00f18fb6b3ea'),
      img('photo-1600585154526-990dced4db0d'),
    ],
    neighborhood:
      'Sahloul est l’un des quartiers les plus recherchés de Sousse : résidentiel, aéré, et relié au centre-ville. Écoles, cafés et commerces se rejoignent en quelques minutes, dans une atmosphère calme et familiale.',
  },
  {
    id: 3,
    title: 'Demeure de charme à la médina',
    location: 'Djerba',
    type: 'Maison',
    transaction: 'Vente',
    price: '895 000 TND',
    surface: '280 m²',
    rooms: '6 pièces',
    image: img('photo-1600607687920-4e2a09cf159d'),
    featured: true,
    summary:
      'Une demeure de charme dans la médina de Djerba, avec patio, terrasse et le silence des ruelles.',
    description: [
      'Au cœur de la médina, cette maison de 280 m² garde le rythme des demeures d’île : un patio frais, des pièces qui s’enroulent autour de la lumière, et une terrasse d’où l’on voit les toits au couchant.',
      'Six pièces accueillent quatre chambres et trois salles de bain. La cuisine reste fidèle à l’esprit du lieu, tandis que les finitions mêlent pierre, bois et le confort d’une résidence soignée.',
      'Maison & Co la propose pour son caractère, rare à Djerba, et pour une adresse à deux pas du souk sans rien perdre de son intimité.',
    ],
    highlights: [
      'Patio intérieur',
      'Terrasse sur les toits',
      'Charme de la médina',
      'Quatre chambres',
      'Cuisine traditionnelle',
      'À deux pas du souk',
    ],
    specs: [
      { label: 'Surface', value: '280 m²' },
      { label: 'Pièces', value: '6' },
      { label: 'Chambres', value: '4' },
      { label: 'Salles de bain', value: '3' },
      { label: 'Extérieur', value: 'Patio et terrasse' },
      { label: 'Niveaux', value: '2' },
      { label: 'Exposition', value: 'Patio ouvert' },
      { label: 'Stationnement', value: 'À proximité' },
    ],
    gallery: [
      img('photo-1600607687920-4e2a09cf159d'),
      img('photo-1600047509358-9dc75507daeb'),
      img('photo-1600566752355-35792bedcfea'),
      img('photo-1600210492486-724fe5c67fb0'),
    ],
    neighborhood:
      'La médina de Djerba se vit à pas lents : ruelles blanches, ateliers et tables à quelques mètres, avec la mer toujours proche. La demeure profite de cette animation sans jamais la subir.',
  },
  {
    id: 4,
    title: 'Appartement lumineux aux Berges du Lac',
    location: 'Tunis',
    type: 'Appartement',
    transaction: 'Location',
    price: '2 400 TND / mois',
    surface: '110 m²',
    rooms: '3 pièces',
    image: img('photo-1600210492486-724fe5c67fb0'),
    summary:
      'Un trois-pièces lumineux face au lac, dans l’un des quartiers les plus vivants de Tunis.',
    description: [
      'Aux Berges du Lac, cet appartement de 110 m² occupe un sixième étage calme, avec un balcon ouvert sur l’eau et la lumière du nord de Tunis. Le séjour est généreux, les deux chambres sont indépendantes, et l’ensemble a été pensé pour un usage quotidien élégant.',
      'La cuisine est fonctionnelle, une cave accompagne le bien, et une place de parking sécurise les allées et venues. Les finitions restent sobres : sols clairs, menuiseries soignées, et une impression d’espace que la hauteur d’étage renforce.',
      'Idéal pour une installation à Tunis, entre bureaux, restaurants et promenade du lac — une adresse que Maison & Co propose à la location pour sa lumière et sa situation.',
    ],
    highlights: [
      'Balcon vue lac',
      'Séjour traversant',
      'Cave privative',
      'Place de parking',
      'Immeuble standing',
      'Commerces au pied',
    ],
    specs: [
      { label: 'Surface', value: '110 m²' },
      { label: 'Pièces', value: '3' },
      { label: 'Chambres', value: '2' },
      { label: 'Salles de bain', value: '1' },
      { label: 'Étage', value: '6e, avec ascenseur' },
      { label: 'Extérieur', value: 'Balcon vue lac' },
      { label: 'Exposition', value: 'Est' },
      { label: 'Stationnement', value: '1 place et cave' },
    ],
    gallery: [
      img('photo-1600210492486-724fe5c67fb0'),
      img('photo-1600607687644-c7171b42498b'),
      img('photo-1600573472592-401b489a3cdc'),
      img('photo-1493809842364-78817add7ffb'),
    ],
    neighborhood:
      'Les Berges du Lac concentrent bureaux, tables et résidences récentes autour d’un plan d’eau animé. Tout se fait à pied ou en quelques minutes : commerces, cafés, et l’accès rapide vers le centre de Tunis comme vers La Marsa.',
  },
  {
    id: 5,
    title: 'Villa familiale dans un écrin de verdure',
    location: 'Monastir',
    type: 'Villa',
    transaction: 'Vente',
    price: '720 000 TND',
    surface: '240 m²',
    rooms: '5 pièces',
    image: img('photo-1600585154340-be6161a56a0c'),
    summary:
      'Une villa familiale entourée de verdure à Monastir, pensée pour les jours longs et les repas dehors.',
    description: [
      'À Monastir, cette villa de 240 m² s’installe dans un jardin clos. Cinq pièces s’organisent autour d’un séjour haut, ouvert sur la pelouse, avec une lumière douce du matin jusqu’en fin d’après-midi.',
      'Trois chambres, dont une suite, et deux salles de bain composent un étage calme. La cuisine est équipée, et une terrasse couverte prolonge les repas lorsque le soir tombe sur le jardin.',
      'Maison & Co l’a choisie pour son équilibre : assez d’espace pour une famille, assez de verdure pour oublier la rue, et un quartier résidentiel proche du littoral.',
    ],
    highlights: [
      'Jardin clos',
      'Séjour en double hauteur',
      'Suite parentale',
      'Terrasse couverte',
      'Cuisine équipée',
      'Quartier résidentiel',
    ],
    specs: [
      { label: 'Surface', value: '240 m²' },
      { label: 'Pièces', value: '5' },
      { label: 'Chambres', value: '3' },
      { label: 'Salles de bain', value: '2' },
      { label: 'Terrain', value: '450 m²' },
      { label: 'Extérieur', value: 'Jardin et terrasse' },
      { label: 'Exposition', value: 'Ouest' },
      { label: 'Stationnement', value: '2 places' },
    ],
    gallery: [
      img('photo-1600585154340-be6161a56a0c'),
      img('photo-1600047509807-ba8f99d2cdbc'),
      img('photo-1600573472591-ee6b68d14c68'),
      img('photo-1600566753086-00f18fb6b3ea'),
    ],
    neighborhood:
      'Monastir mêle quartiers résidentiels, corniche et une vie de ville à taille humaine. La villa est à quelques minutes des écoles, des commerces et de la promenade en bord de mer.',
  },
  {
    id: 6,
    title: 'Penthouse avec terrasse panoramique',
    location: 'La Marsa',
    type: 'Appartement',
    transaction: 'Location',
    price: '4 800 TND / mois',
    surface: '190 m²',
    rooms: '4 pièces',
    image: img('photo-1600607688969-a5bfcd646154'),
    summary:
      'Un dernier étage rare à La Marsa, avec une terrasse panoramique et des volumes de maison.',
    description: [
      'Ce penthouse de 190 m² couronne un immeuble discret de La Marsa. Quatre pièces s’y déploient autour d’un séjour largement vitré, prolongé par une terrasse de 60 m² d’où l’on suit la lumière du golfe, du matin jusqu’au soir.',
      'La suite parentale dispose de sa salle d’eau, deux autres chambres se partagent une salle de bains, et la cuisine ouverte dialogue avec la réception. Deux places de parking et un local de service rendent le bien aussi pratique que spectaculaire.',
      'Maison & Co le présente à la location pour celles et ceux qui cherchent, à La Marsa, l’ampleur d’une villa et l’adresse d’un appartement d’exception.',
    ],
    highlights: [
      'Terrasse panoramique 60 m²',
      'Suite parentale',
      'Cuisine ouverte',
      'Dernier étage',
      'Deux parkings',
      'Vue dégagée sur le golfe',
    ],
    specs: [
      { label: 'Surface', value: '190 m²' },
      { label: 'Pièces', value: '4' },
      { label: 'Chambres', value: '3' },
      { label: 'Salles de bain', value: '3' },
      { label: 'Étage', value: 'Dernier étage' },
      { label: 'Terrasse', value: '60 m²' },
      { label: 'Exposition', value: 'Sud et ouest' },
      { label: 'Stationnement', value: '2 places' },
    ],
    gallery: [
      img('photo-1600607688969-a5bfcd646154'),
      img('photo-1600047509807-ba8f99d2cdbc'),
      img('photo-1600585154340-be6161a56a0c'),
      img('photo-1613490493576-7fde63acd811'),
    ],
    neighborhood:
      'La Marsa mêle villas, cafés de bord de mer et rues résidentielles à deux pas de la plage. Le penthouse profite de ce rythme : le marché, la corniche et les écoles du quartier restent proches, sans rien céder au calme d’un dernier étage.',
  },
]

export function getProperty(id: number) {
  return properties.find((property) => property.id === id)
}

export function getRelatedProperties(property: Property, limit = 2) {
  return properties
    .filter((item) => item.id !== property.id)
    .sort((a, b) => Number(b.type === property.type) - Number(a.type === property.type))
    .slice(0, limit)
}
