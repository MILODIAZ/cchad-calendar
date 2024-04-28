import SecretaryCalendarView from '@/components/SecretaryCalendarView/SecretaryCalendarView';

export default function ConfigMedicScheduleForSecretary(props: any) {
	let { events } = props;

	return (
		<section className='flex w-full'>
			<div className='w-full'>
				<SecretaryCalendarView events={events} />
			</div>
		</section>
	);
}
