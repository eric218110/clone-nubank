import { MaterialIcons, AntDesign } from "@expo/vector-icons";

export interface IDataTabs {
  icon: {
    type: any;
    name: string;
  };
  text: string;
  id: number;
}

export const dataTabs: IDataTabs[] = [
  {
    icon: {
      type: AntDesign,
      name: "adduser",
    },
    text: "Indicar amigos",
    id: 1,
  },
  {
    icon: {
      type: MaterialIcons,
      name: "chat-bubble-outline",
    },
    text: "Cobrar",
    id: 2,
  },
  {
    icon: {
      type: AntDesign,
      name: "arrowdown",
    },
    text: "Depositar",
    id: 3,
  },
  {
    icon: {
      type: AntDesign,
      name: "arrowup",
    },
    text: "Transferir",
    id: 4,
  },
  {
    icon: {
      type: MaterialIcons,
      name: "lock-outline",
    },
    text: "Bloquear cartão",
    id: 5,
  },
];
