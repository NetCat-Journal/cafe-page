import { menuItems, MenuItem, coffeeItems, foodItems } from "../../data/food";
import { Coffee, UtensilsCrossed } from 'lucide-react';

function Items() {
    return (
        <div className='bg-white w-full px-8 py-2'>
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#a96522] mb-4">
                    Our Menu
                </h2>
                <p className="text-xl text-[#8e8e8e]">
                    Authentic Argentine coffee culture meets Caribbean ease
                </p>
            </div>
            <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                    <Coffee size={32} className="text-[#90591f]" />
                    <h3 className="text-3xl font-bold text-gray-900">Specialty Coffee</h3>
                </div>
                <div className="grid md:grid-col-2 lg:grid-cols-4 gap-6">
                    {coffeeItems.map((item) => (
                        <div
                            key={item.name}
                            className="p-6 border-2 border-gray-100 rounded-lg hover:border-[#a96522] hover:shadow-lg transition-all"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <h4 className="font-bold text-lg">{item.name}</h4>
                                <span className="font-bold text-[#a96522] text-lg whitespace-nowrap ml-2">
                                    {item.price}
                                </span>
                            </div>
                            <p className="text-sm text-[#8e8e8e]">{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-16">
                    <div className="flex items-center gap-3 mb-8">
                        <UtensilsCrossed size={32} className="text-[#a96522]" />
                        <h3 className="text-3xl font-bold text-gray-900">Fresh Food</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {foodItems.map((item) => (
                            <div
                                key={item.name}
                                className="p-6 border-2 border-gray-100 rounded-lg hover:border-[#a96522] hover:shadow-lg transition-all"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h4 className="font-bold text-lg">{item.name}</h4>
                                    <span className="font-bold text-[#a96522] text-lg whitespace-nowrap ml-2">
                                        {item.price}
                                    </span>
                                </div>
                                <p className="text-sm text-[#8e8e8e]">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16 p-8 bg-gray-50 rounded-lg">
                        <p className="text-gray-600 text-lg">
                            Daily specials and seasonal items available in-store
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Items