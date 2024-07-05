import FeatureCard from "./FeatureCard";
import { TbTruckDelivery, TbDiscount } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";

const data = [
    {
        icon: <TbTruckDelivery className="text-4xl" />,
        title: "Frete GRÁTIS para todas as regiões",
        desc: "Para todos os itens da loja!",
    },
    {
        icon: <RiRefund2Fill className="text-4xl" />,
        title: "Devolução e Reembolso",
        desc: "Garantia da devolução do seu dinheiro",
    },
    {
        icon: <TbDiscount className="text-4xl" />,
        title: "Cupons e Descontos",
        desc: "Em pedidos acima de R$30,00!",
    },
    {
        icon: <MdSupportAgent className="text-4xl" />,
        title: "Suporte 24 Horas",
        desc: "Entre em contato conosco 24 horas por dia",
    },
];

const Feature = () => {
    return (
        <div className="container grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {data.map((item) => (
                <FeatureCard
                    key={item.title}
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                />
            ))}
        </div>
    );
};

export default Feature;