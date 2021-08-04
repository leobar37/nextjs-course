export interface Iplate {
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
  slug?: string;
}

const data: Iplate[] = [
  {
    name: "Pan de Chicharrón",
    description:
      "El pan de chicharrón es uno de los platos típicos peruanos para el desayuno que se come en cualquier región del país.",
    price: 50,
    image: "/plates/pan_de_chicharron.jpg",
    tags: ["delivery"],
  },
  {
    name: "Aguadito de pollo",
    description:
      "El aguadito de pollo es un plato con importante historia en el Perú,",
    price: 50,
    image: "/plates/aguadito.jpg",
    tags: ["delivery"],
  },
  {
    name: "Picante a la Tacneña",
    description:
      "Platillo con raíces en las zonas altas andinas de Candarave y Tarata del Departamento de Tacna,",
    price: 50,
    image: "/plates/picante.jpg",
    tags: ["delivery"],
  },
];

export class Restaurant {
  plates(): Promise<Iplate[]> {
    return new Promise((res, rejected) => {
      setTimeout(() => {
        res(
          data.map((item) => ({
            ...item,
            slug: item.name.replace(/\s/g, "").toLocaleLowerCase(),
          }))
        );
      }, 400);
    });
  }
  platesBySlug(slug: string): Promise<Iplate | null> {
    return new Promise((res, rejected) => {
      setTimeout(() => {
        const item = data
          .map((item) => ({
            ...item,
            slug: item.name.replace(/\s/g, "").toLocaleLowerCase(),
          }))
          .find((item) => item.slug == slug);
        res(item || null);
      }, 400);
    });
  }
}

const instance = new Restaurant();

export default instance;
