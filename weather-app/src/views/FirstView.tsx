import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigate } from 'react-router-native';
import { ImageComponent } from '../components/ImageComponent';
import { ButtonComponent } from '../components/ButtonComponent';

export default function FirstView() {
	const navigate = useNavigate();

	const goToSecondView = () => {
		navigate("/SecondView");
	}

	return (
		<View style={{
			padding: 20,
			paddingTop: 30,
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
			alignContent: "center",
			backgroundColor: "#F0F0F0",
			alignItems: "center",

			height: "100%",
		}}>
			<View style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				marginTop: 40
			}}>
				<Text
					style={{
						fontSize: 20,
						fontWeight: 700,
						color: "#455A64",
						textAlign: "center",
						paddingLeft: 80,
						paddingRight: 80,
					}}
				>Seja bem-vindo(a) ao Weather Forecast!

				</Text>
				<View style={{
					marginTop: 40
				}}>
					{/* <Image
						source={{ uri: 'https://kliquesites.com.br/acaidelivery/wp-content/uploads/2024/06/combo-tropical.png' }}
						style={{
							width: 200,
							height: 200,

						}}
					/> */}
					<ImageComponent
						img={require('../../assets/images/image1.png')}
						width={300}
						height={300}
					/>
				</View>
			</View>
			<View>
				<Text
					style={{
						fontSize: 16,
						fontWeight: 700,
						color: "#455A64",
						textAlign: "center",
						paddingLeft: 80,
						paddingRight: 80,
					}}
				>
					Inicie a busca por cidade para obter informações sobre o clima atual.
				</Text>
			</View>
			<View style={{
				marginBottom: 50,
				display: "flex",
				width: "100%",
			}}>
				<ButtonComponent
					title='op'
					style={{
						display: "flex",
						width: "100%",
						backgroundColor: "#407BFF",
						height: 60,
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 10
					}}
					onPress={() => {
						goToSecondView();
					}}
				>
					<Text style={{
						fontSize: 14,
						color: "#FFFFFF",
						textAlign: "center",
						fontWeight: 700
					}}>
						Iniciar Busca
					</Text>
				</ButtonComponent>
			</View>
		</View>
	);
}

