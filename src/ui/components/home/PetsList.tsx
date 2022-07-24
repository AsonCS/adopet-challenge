import React from 'react'

import Styled from './styled'
import Pets from '../../../api/model/Pets'

export default function PetsList(props: {
	pets: Pets
	onPetClick: (petId: number) => void
}) {
	return (
		<Styled.ContainerList>
			{props.pets.list.map((pet) => {
				return (
					<Styled.Figure key={pet.id}>
						<Styled.Img
							onClick={() => props.onPetClick(pet.id)}
							src={pet.image}
							alt={pet.name}
						/>
						<Styled.Figcaption>
							<Styled.LabelInfos>
								<Styled.Span
									onClick={() => props.onPetClick(pet.id)}
								>
									{pet.name}
								</Styled.Span>
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
								onClick={() => props.onPetClick(pet.id)}
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
