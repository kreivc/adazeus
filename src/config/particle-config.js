const particlesConfig = {
	particles: {
		number: {
			value: 160,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: "#293cc7",
		},
		shape: {
			type: "circle",
			stroke: {
				width: 0,
				color: "#000000",
			},
			polygon: {
				nb_sides: 5,
			},
			image: {
				src: "https://i.ibb.co/xjWY3PV/DINO.png",
				width: 100,
				height: 100,
			},
		},
		opacity: {
			value: 1,
			random: true,
			anim: {
				enable: true,
				speed: 1,
				opacity_min: 0,
				sync: false,
			},
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: false,
				speed: 4,
				size_min: 0.3,
				sync: false,
			},
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: "#dcdcdc",
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,
			speed: 1,
			direction: "none",
			random: true,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 600,
			},
		},
	},

	retina_detect: false,
};

export default particlesConfig;
