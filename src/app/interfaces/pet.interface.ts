export interface ICar {
  id: number;
  category: {
    id: number;
    name: string;
  };
  name: string;
  photoUrls: [string];
  tags: [
    {
      id: number;
      name: string;
    },
  ];
  status: string;
}

export interface ICarProps {
  car: ICar;
}
