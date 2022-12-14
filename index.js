const SibApiV3Sdk = require('sib-api-v3-sdk');
const getVehicles = require('./get-vehicles');
require('dotenv').config();

const { SEND_IN_BLUE_API_KEY, RECIPIENT_EMAIL, RECIPIENT_NAME, SUPPORT_NAME, SUPPORT_EMAIL } = process.env;
const defaultClient = SibApiV3Sdk.ApiClient.instance;

const sendVehiclesEmail = async () => {
	try {
		const apiKey = defaultClient.authentications['api-key'];
		apiKey.apiKey = SEND_IN_BLUE_API_KEY;
		// email
		const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
		const email = {
			sender: {
				email: SUPPORT_EMAIL, name: SUPPORT_NAME,
			},
			subject: `BMW Cars ${new Date().toLocaleDateString()}`,
			to: [{ 
				email: RECIPIENT_EMAIL, name: RECIPIENT_NAME 
			}],
			textContent: JSON.stringify(await getVehicles(), null, 2)
		}
		
		await apiInstance.sendTransacEmail(email);
	} catch (err) {
		console.log(err);
	}
};

setInterval(() => sendVehiclesEmail(), 8.64e+7);
