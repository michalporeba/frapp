const useAvailableChecklists = () => {
    return ([
        { id: 1, name: 'First Aid Pack'},
        { id: 2, name: 'First Responder Bag'},
        { id: 3, name: 'HK 105'}
    ]);
};

const useChecklist = (id) => {
    switch(id) {
        case 1: return {
            name: 'First Aid Pack',
            items: [
                { name: 'Small Bandage' },
                { name: 'Big Bandage' }
            ]
        };
        case 2: return {
            name: 'First Responder Bag',
            items: [
                { ref: 11, name: 'Oxygen' },
                {   name: 'Airways', 
                    items: [
                        {   name: 'OPs', 
                            items: [
                                { name: 'Size 4', quantity: 2 },
                                { name: 'Size 3', quantity: 2 },
                                { name: 'Size 2', quantity: 2 },
                                { name: 'Size 1', quantity: 2 }
                            ]
                        }, 
                        {   name: 'iGels',
                            items: [
                                { name: 'Size 6', quantity: 1 },
                                { name: 'Size 5', quantity: 1 },
                                { name: 'Size 4', quantity: 1 }
                            ]
                        }
                    ]
                }
            ]
        };
        case 3: return {
            name: 'HK 105',
            items: [
                { ref: 2 }, 
                { ref: 12 },
                { ref: 13 }
            ]
        };
        case 11: return {
            name: 'Oxygen',
            items: [
                { name: 'Oxygen Cylinder' }, 
                { name: 'Adult BVM' }, 
                { name: 'Pediatric BVM' },
                { name: 'Catheter' },
                { name: 'Viral Filter' },
                { name: 'CO2 Monitor' }
            ]
        };
        case 12: return {
            name: 'Entonox',
            items: [
                { name: 'Entonox Cylinder' },
                { name: 'Giving set' },
                { name: 'Viral Filter' }
            ]
        };
        case 13: return {
            name: 'Obs Kit', 
            items: [
                { name: 'Automatic BP' },
                { name: 'Manual BP' },
                { name: 'BM' }, 
                { name: 'Tempanic Termomether'},
            ]
        };
        default: return null;
    }
};

export {
    useAvailableChecklists,
    useChecklist
};