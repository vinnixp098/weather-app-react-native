import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, Button, ScrollView } from 'react-native';
import { useNavigate } from 'react-router-native';
import { ButtonComponent } from '../components/ButtonComponent';
import { ImageComponent } from '../components/ImageComponent';
import { InputComponent } from '../components/InputComponent';
import axios from 'axios';
import countries, { getName } from 'i18n-iso-countries';
import 'i18n-iso-countries/langs/pt.json';
import { LoadingComponent } from '../components/LoadingComponent';

countries.registerLocale(require('i18n-iso-countries/langs/pt.json'));


export default function SecondView() {
	const navigate = useNavigate();

	const [weather, setWeather] = useState<any>({});
	const [countryName, setCountryName] = useState<string>('');
	const [country, setCountryCode] = useState<string>('');
	const [temperature, setTemperature] = useState<any>();

	const [cityName, setCityName] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [show, setShow] = useState(false);

	const searchWeather = async () => {

		setLoading(true);
		// setWeather({});

		const keyApi = "05138500be22715eaf4a7f8c4904a03c";

		const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keyApi}&lang=pt_br&units=metric`);

		if (response) {

			setWeather(response.data);
			const countryCode = response.data.sys.country; // Obter o código do país
			setCountryCode(countryCode);
			const name = countries.getName(countryCode, 'pt'); // Obter o nome do país
			setCountryName(name || 'País não encontrado'); // Atualizar o nome do país

			setLoading(false);
			setShow(true);
			setCityName('');

		} else {
			setLoading(false);
			setError(true);
			return

		}


		setLoading(false);
	}

	const imageUrl = 'https://openweathermap.org/themes/openweathermap/assets/img/landing/one_call_api.png';


	const capitalizeFirstLetter = (string: string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	return (
		<ScrollView>
			<View style={{
				padding: 20,
				paddingTop: 30,
				display: "flex",
				flexDirection: "column",
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
					<View style={{
						// backgroundColor: "red",
						alignItems: 'center',
						marginTop: 0,
						display: "flex",
						width: "100%",
					}}>
						<ImageComponent
							img={require('../../assets/images/logo2.png')}
							width={100}
							height={110}
							style={{
								backgroundColor: "none"
							}}
						/>
					</View>
					<View style={{
						// paddingLeft: 100,
						marginTop: 30,
						width: 400,
						flexDirection: "row",
						alignItems: "center",

						display: "flex",
						// backgroundColor: 'green'

					}}>
						<InputComponent
							placeholder='Search'
							label="Digite algo:"
							style={{
								width: 300,
								height: 60,
								borderBottomLeftRadius: 10,
								borderTopLeftRadius: 10,
								borderColor: "#407BFF"
								// borderRadius: 10,
							}}
							onChangeText={setCityName} // Captura a mudança do texto
							value={cityName} // Define o valor do TextInput
						/>

						<ButtonComponent
							style={{
								width: 100,
								height: 60,
								borderTopRightRadius: 10,
								borderBottomRightRadius: 10,
								backgroundColor: '#407BFF',
								alignItems: "center",
								justifyContent: "center",

							}}
							onPress={() => {
								// console.log("Botão pressionado!");
								// handleSubmit();
								searchWeather();
							}}
							icon={<ImageComponent
								img={require('../../assets/icons/icon.png')}
								width={24}
								height={24}
								style={{
									backgroundColor: "none"
								}}
							/>}
						/>
					</View>
				</View>

				{loading && !show ? (

					<View style={{
						// backgroundColor: "red",
						alignItems: 'center',
						marginTop: 70,
						display: "flex",
						width: "100%",
					}}>
						<LoadingComponent />
					</View>
				)
					: null
				}
				{/* {!loading && !show ? (

					<View style={{
						// backgroundColor: "red",
						alignItems: 'center',
						marginTop: 70,
						display: "flex",
						width: "100%",
					}}>
						<ImageComponent
							img={require('../../assets/images/image2.png')}
							width={300}
							height={300}
							style={{
								backgroundColor: "none"
							}}
						/>
					</View>
				)
					: null
				} */}


				{/* {show && ( */}

					<View
						style={{
							alignItems: 'center',
							flexDirection: "column",
							marginTop: 20,
							display: "flex",
							width: "100%",
							gap: 20


						}}>
						<View
							style={{
								backgroundColor: "#407BFF",
								width: "100%",
								height: 80,
								borderRadius: 10,
								alignItems: 'center',
								justifyContent: 'center',


							}}
						>
							<Text
								style={{
									fontSize: 20,
									color: "#FFFFFF",
									fontWeight: "bold",

								}}
							>
								{/* {weather.name} -  {countryName} */}


							</Text>
						</View>
						<View
							style={{
								backgroundColor: "#407BFF",
								width: "100%",
								height: 180,
								borderRadius: 10,
								alignItems: 'center',
								justifyContent: 'center',
								gap: 10

							}}
						>
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									gap: 25,
									alignItems: 'center',
									backgroundColor: "red"


								}}
							>
								<View >
									<Image
										source={{ uri: imageUrl }}
										style={{ width: 50, height: 50 }}
										// style={styles.image}
										// resizeMode="cover" // ou "contain" dependendo do seu caso
									/>
								</View>
								{/* <ImageComponent
									img={require('../../assets/images/nuvem.png')}
									width={56}
									height={40}
									style={{
										backgroundColor: "none"
									}}
								/> */}
								<Text
									style={{
										fontSize: 30,
										color: "#FFFFFF",
										fontWeight: "bold",

									}}
								>
									{/* {Math.round(weather.main.temp)}° C */}
								</Text>
							</View>
							<Text
								style={{
									fontSize: 18,
									color: "#FFFFFF",
									fontWeight: "400",

								}}
							>
								{/* {capitalizeFirstLetter(weather.weather[0].description)} */}
							</Text>
						</View>
						<View
							style={{
								backgroundColor: "#407BFF",
								width: "100%",
								height: 80,
								borderRadius: 10,
								alignItems: 'center',
								paddingLeft: 20,
								flexDirection: 'row',
								gap: 20,
							}}
						>
							<ImageComponent
								img={require('../../assets/images/sensacao.png')}
								width={13}
								height={22}
								style={{
									backgroundColor: "none"
								}}
							/>
							<Text
								style={{
									fontSize: 18,
									color: "#FFFFFF",
									fontWeight: "400",

								}}
							>
								{/* Sensação térmica: {Math.round(weather.main.feels_like)}° C */}
							</Text>
						</View>
						<View
							style={{
								backgroundColor: "#407BFF",
								width: "100%",
								height: 80,
								borderRadius: 10,
								alignItems: 'center',
								paddingLeft: 20,
								flexDirection: 'row',
								gap: 20,
							}}
						>
							<ImageComponent
								img={require('../../assets/images/pressao.png')}
								width={19}
								height={18}
								style={{
									backgroundColor: "none"
								}}
							/>
							<Text
								style={{
									fontSize: 18,
									color: "#FFFFFF",
									fontWeight: "400",

								}}
							>
								{/* Pressão do ar: {weather.main.pressure} hPa */}

							</Text>
						</View>
						<View
							style={{
								backgroundColor: "#407BFF",
								width: "100%",
								height: 80,
								borderRadius: 10,
								alignItems: 'center',
								paddingLeft: 20,
								flexDirection: 'row',
								gap: 20,
							}}
						>
							<ImageComponent
								img={require('../../assets/images/humidade.png')}
								width={14}
								height={18}
								style={{
									backgroundColor: "none"
								}}
							/>
							<Text
								style={{
									fontSize: 18,
									color: "#FFFFFF",
									fontWeight: "400",

								}}
							>
								{/* Humidade: {weather.main.humidity}% */}
							</Text>
						</View>
					</View>
				{/* )} */}


				{error && !show && !loading ? (<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						marginBottom: 280
					}}
				>
					<Text style={{ fontSize: 14, color: "red", fontWeight: "600" }}
					>
						Não foi possível buscar o clima!

					</Text>
				</View>
				) : null

				}

			</View>
		</ScrollView>

	);
}
