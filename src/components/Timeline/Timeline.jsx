import "./timeline.css";
import timelineElements from "./timelineElements";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
	return (
		<div className="timeline" id="timeline">
			<h1 className="title">Timeline</h1>
			<VerticalTimeline>
				{timelineElements.map((element) => {
					let isSuccessIcon = element.icon === "success";
					let showButton =
						element.buttonText !== undefined &&
						element.buttonText !== null &&
						element.buttonText !== "";

					return (
						<VerticalTimelineElement
							key={element.key}
							date={element.date}
							dateClassName="date"
							iconStyle={{
								backgroundColor: `${
									isSuccessIcon ? "#01bf71" : "#21d4d4"
								}`,
							}}
							icon={element.id}
							iconClassName="iconQ"
						>
							<h1 className="vertical-timeline-element-title">
								{element.end}
							</h1>
							<h3 className="vertical-timeline-element-title title3">
								{element.title}
							</h3>
							<h5 className="vertical-timeline-element-subtitle">
								{element.location}
							</h5>
							<p id="description">{element.description}</p>
							<p id="descriptionR">{element.description1}</p>
							<p id="descriptionR">{element.description2}</p>
							<p id="descriptionR">{element.description3}</p>
							<p id="descriptionRE">{element.description4}</p>
							{showButton && (
								<span
									className={`${
										isSuccessIcon
											? "button success"
											: "button cms"
									}`}
								>
									{element.buttonText}
								</span>
							)}
						</VerticalTimelineElement>
					);
				})}
			</VerticalTimeline>
		</div>
	);
}
