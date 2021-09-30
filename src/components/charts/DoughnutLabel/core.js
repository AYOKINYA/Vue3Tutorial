import {resolve} from 'chart.js/helpers'
import {utils} from './utils';


function drawDoughnutLabel(chart) {

	// text to write inside the doughnut chart
	const options = {
		font: 'san-serif', 
		color: 'red', // if color is not given, utils.defaults.font.color is set
		labels: [
			{
				text: "Progress",
					font: {
						size: '60'
					},
				//The color is red without given color
			},
			{
				text: "65%",
					font: {
						size: '60'
					},
				color: 'rgba(111, 163, 212, 1)'
			},
		]
	};

	if (chart.chartArea) {
		const {ctx, chartArea: {top, right, bottom, left}} = chart;
		const { labels } = options;
		const color = utils.defaults.font.color;

		ctx.save();
		const innerLabels = [];
		labels.forEach(function (label) {
			const text =
			typeof label.text === "function" ? label.text(chart) : label.text;
			const innerLabel = {
				text: text,
				font: utils.parseFont(resolve([label.font, options.font, {}], ctx, 0)),
				color: resolve(
					[label.color, options.color, color],
					ctx,
					0
				),
		};
			innerLabels.push(innerLabel);
		});

		let textAreaSize = utils.textSize(ctx, innerLabels);

		// Calculate the adjustment ratio to fit the text area into the doughnut inner circle
		const hypotenuse = Math.sqrt(
			Math.pow(textAreaSize.width, 2) + Math.pow(textAreaSize.height, 2)
		);
		const innerDiameter =  chart._metasets[chart._metasets.length-1].data[0].innerRadius * 2;
		const fitRatio = innerDiameter / hypotenuse;

		// Adjust the font if necessary and recalculate the text area after applying the fit ratio
		if (fitRatio < 1) {
			innerLabels.forEach(function (innerLabel) {
				innerLabel.font.size = Math.floor(innerLabel.font.size * fitRatio);
				innerLabel.font.lineHeight = undefined;
				innerLabel.font = utils.parseFont(
					resolve([innerLabel.font, {}], ctx, 0)
				);
			});

			textAreaSize = utils.textSize(ctx, innerLabels);
		}

		ctx.textAlign = "center";
		ctx.textBaseline = "middle";

		// The center of the inner circle
		const centerX = (left + right) / 2;
		const centerY = (top + bottom) / 2;

		// The top Y coordinate of the text area
		const topY = centerY - textAreaSize.height / 2;

		let i;
		const ilen = innerLabels.length;
		let currentHeight = 0;
		for (i = 0; i < ilen; ++i) {
			ctx.fillStyle = innerLabels[i].color;
			ctx.font = innerLabels[i].font.string;

			// The Y center of each line
			const lineCenterY =
				topY + innerLabels[i].font.lineHeight / 2 + currentHeight;
			currentHeight += innerLabels[i].font.lineHeight;

			// Draw each line of text
			ctx.fillText(innerLabels[i].text, centerX, lineCenterY);
		}

	}
}

export default drawDoughnutLabel;
