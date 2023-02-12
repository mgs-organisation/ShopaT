const data = {
  discounts: [
    {
      id: 10,
      store: 'Google',
      percentage: 30,
      code: 'Managed by Google',
    },
    {
      id: 20,
      store: 'React Managed by Facebook',
      percentage: 20,
      code: 'FB20',
    },
    {
      id: 30,
      store: 'MicroSoft',
      percentage: 10,
      code: 'Azure10',
    },
  ],
};

const getDiscounts = () => {
  return data.discounts;
};

module.exports = { getDiscounts };
