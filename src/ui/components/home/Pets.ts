import {
	petZelda,
	petAmora,
	petDunga,
	petFelicia,
	petFiona,
	petLua,
	petSid,
	petSirius,
	petYoda,
} from '../../images'

export type Pet = {
	id: number
	image: string
	name: string
	age: string
	size: string
	behavior: string
	location: string
}

export const petList: Array<Pet> = [
	{
		id: 1,
		image: petDunga,
		name: 'Dunga',
		age: '2 anos',
		size: 'Porte pequeno',
		behavior: 'Calmo e educado',
		location: 'Rio de Janeiro (RJ)',
	},
	{
		id: 2,
		image: petFelicia,
		name: 'Felícia',
		age: '3 meses',
		size: 'Porte pequeno',
		behavior: 'Ativa e carinhosa',
		location: 'Nova Iguaçu (RJ)',
	},
	{
		id: 3,
		image: petSirius,
		name: 'Sirius',
		age: '6 meses',
		size: 'Porte grande',
		behavior: 'Ativo e educado',
		location: 'Duque de Caxias (RJ)',
	},
	{
		id: 4,
		image: petFiona,
		name: 'Fiona',
		age: '3 anos',
		size: 'Porte pequeno',
		behavior: 'Calma e carinhosa',
		location: 'São Gonçalo (RJ)',
	},
	{
		id: 5,
		image: petSid,
		name: 'Sid',
		age: '8 meses',
		size: 'Porte médio/grande',
		behavior: 'Brincalhão e amável',
		location: 'Rio de Janeiro (RJ)',
	},
	{
		id: 6,
		image: petYoda,
		name: 'Yoda',
		age: '1 ano',
		size: 'Porte médio',
		behavior: 'Ativo e carinhoso',
		location: 'Nova Iguaçu (RJ)',
	},
	{
		id: 7,
		image: petLua,
		name: 'Lua',
		age: '6 meses',
		size: 'Porte médio',
		behavior: 'Ativa e carinhosa',
		location: 'Duque de Caxias (RJ)',
	},
	{
		id: 8,
		image: petAmora,
		name: 'Amora',
		age: '45 dias',
		size: 'Porte grande',
		behavior: 'Calma e carinhosa',
		location: 'São Gonçalo (RJ)',
	},
	{
		id: 9,
		image: petZelda,
		name: 'Zelda',
		age: '5 meses',
		size: 'Porte médio',
		behavior: 'Ativa e amável',
		location: 'Rio de Janeiro (RJ)',
	},
]
