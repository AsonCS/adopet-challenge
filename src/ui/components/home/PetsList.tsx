import React from 'react'

import Styled from './styled'
import Pets from '../../../api/model/Pets'

export default function PetsList(props: {
	pets: Pets
	onPetClick: (id: number, name: string) => void
}) {
	return (
		<Styled.ContainerList>
			{props.pets.list.map((pet) => {
				return (
					<Styled.Figure key={pet.id}>
						<Styled.Img src={pet.image} alt={pet.name} />
						<Styled.Figcaption>
							<Styled.LabelInfos>
								<Styled.Span>{pet.name}</Styled.Span>
								<Styled.SpanDescription>
									{pet.age}
								</Styled.SpanDescription>
								<Styled.SpanDescription>
									{pet.size}
								</Styled.SpanDescription>
								<Styled.SpanDescription>
									{pet.behavior}
								</Styled.SpanDescription>
							</Styled.LabelInfos>
							<Styled.SpanLocation>
								{pet.location}
							</Styled.SpanLocation>
							<Styled.SpanContact
								onClick={() =>
									props.onPetClick(pet.id, pet.name)
								}
							>
								Falar com responsável
							</Styled.SpanContact>
						</Styled.Figcaption>
					</Styled.Figure>
				)
			})}
		</Styled.ContainerList>
	)
}
