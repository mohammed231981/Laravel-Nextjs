
const AccountMenuItems = [
    {
      label: 'Salarisstroken',
      icon: 'pi pi-fw ',
      url: 'salarisstroken',
    },
    {
      label: 'Declaraties',
      icon: 'pi pi-fw ',
      items: [
        { label: 'Extra uren', icon: 'pi pi-fw pi-star' , url: '/extra-uren' },
        { label: 'Reiskosten', icon: 'pi pi-fw pi-star',  url: '/reiskosten' },
        { label: 'Overige declaraties', icon: 'pi pi-fw pi-star',  url: '/overige-declaraties' },
        { label: 'Historie', icon: 'pi pi-fw pi-star', url : '/historie' }
      ]
    },
    {
        label: 'Projecten weekinvoer',
        icon: 'pi pi-fw ',
        url: 'projecten-weekinvoer',
      }, 
    {
      label: 'Verlof',
      icon: 'pi pi-fw ',
      items: [
        { label: 'Verlofkaart', icon: 'pi pi-fw pi-star' , url: '/verlof/verlofkaart' },
        { label: 'Compenstatiekaart', icon: 'pi pi-fw pi-star',  url: '/verlof/compensatiekaart' },
      ]
    },
    {
        label: 'Fiatteren factuur',
        icon: 'pi pi-fw ',
        url: 'fiatteren-factuur',
      },
  ];

  export default AccountMenuItems;