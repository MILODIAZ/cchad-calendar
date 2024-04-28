import { Calendar, EventProps, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';
import NotPublishedBlockCalendarComponent from './NotPublishedBlockCalendarComponent';
import BlockedBlockCalendarComponent from './BlockedCalendarComponent';
import PublishedBlockCalendarComponent from './PublishedBlockCalendarComponent';
import ReservedBlockCalendarComponent from './ReservedBlockCalendarComponent';
import { useMemo } from 'react';

moment.locale('es');
const localizer = momentLocalizer(moment);

const messages = {
	previous: '<',
	next: '>',
	today: 'Hoy',
	month: 'Mes',
	week: 'Semana',
	day: 'Día',
	date: 'Fecha',
	time: 'Hora',
	event: 'Evento',
	allDay: 'Todo el día',
	work_week: 'Semana de trabajo',
	yesterday: 'Ayer',
	tomorrow: 'Mañana',
	agenda: 'Agenda',
	noEventsInRange: 'No hay eventos en este rango',
	showMore: (total: number) => `+${total} más`,
};

/*const events = [
	{
		start: moment('2024-04-12 13:00:00+00').toDate(),
		end: moment('2024-04-12 14:00:00+00').toDate(),
		color: '#CCD3CA',
	},
	{
		start: moment('2024-04-12 14:00:00+00').toDate(),
		end: moment('2024-04-12 15:00:00+00').toDate(),
		color: '#F5E8DD',
	},	
];*/

const eventStyleGetter = (event: any) => {
	var style = {
		backgroundColor: event.color,
		borderRadius: '1px',
		opacity: 0.8,
		color: 'black',
		border: '0px',
		display: 'block',
	};
	return {
		style: style,
	};
};

export default function SecretaryCalendarView(props: any) {
	let { events } = props;

	const components: any = {
		event: ({ event }: any) => {
			const type = event.color;
			if (type === '#B5C0D0')
				return <NotPublishedBlockCalendarComponent />;
			if (type === '#EED3D9') return <BlockedBlockCalendarComponent />;
			if (type === '#F5E8DD') return <PublishedBlockCalendarComponent />;
			if (type === '#CCD3CA')
				return (
					<ReservedBlockCalendarComponent
						appointments={event.appointments}
					/>
				);
		},
	};

	return (
		<div>
			<Calendar
				components={components}
				localizer={localizer}
				events={events}
				defaultView='week'
				views={['month', 'week', 'day']}
				min={moment('2024-04-12 12:00:00+00').toDate()}
				max={moment('2024-04-13 01:00:00+00').toDate()}
				startAccessor='start'
				endAccessor='end'
				messages={messages}
				eventPropGetter={eventStyleGetter}
				style={{
					height: '860px',
					backgroundColor: '#F9F5F6',
				}}
			/>
		</div>
	);
}
