import DefaultLayout from '@/layouts/default';
import ConfigMedicScheduleForSecretary from '@/components/ConfigMedicScheduleForSecretary/ConfigMedicScheduleForSecretary';
import { useEffect, useMemo, useState } from 'react';
import { getMedicsForSecretary, getMedicForSecretary } from './api/api';
import { Select, SelectItem } from '@nextui-org/react';
import moment from 'moment';

export default function IndexPage() {
	const [medics, setMedics] = useState([]);
	const [selectedMedic, setSelectedMedic] = useState<string>('');
	const handleMedicSelectionChange = (
		e: React.ChangeEvent<HTMLSelectElement>
	) => {
		setSelectedMedic(e.target.value);
		fetchMedic(parseInt(e.target.value));
	};
	const [medic, setMedic] = useState(null);
	const events = useMemo(() => {
		return mapEvents(medic);
	}, [medic]);

	const fetchMedics = async () => {
		try {
			const result = await getMedicsForSecretary();
			console.log(result);
			setMedics(result);
		} catch (error) {
			console.log(error);
		}
	};

	const fetchMedic = async (medicId: number) => {
		try {
			const result = await getMedicForSecretary(medicId);
			console.log(result);
			setMedic(result);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchMedics();
	}, []);

	function mapEvents(medic: any) {
		if (medic) {
			const medicSchedules = medic.schedules;
			const medicSlots = medicSchedules.flatMap((schedule: any) => {
				return schedule.slots.map((slot: any) => {
					const [startTime, endTime] = JSON.parse(slot.time);
					const start = moment(startTime).toDate();
					const end = moment(endTime).toDate();
					let color: string;
					switch (true) {
						case schedule.public === false:
							color = '#B5C0D0';
							break;
						case slot.blocked === true:
							color = '#EED3D9';
							break;
						case slot.appointments.length > 0:
							color = '#CCD3CA';
							const appointments = slot.appointments;
							return { start, end, color, appointments };
						default:
							color = '#F5E8DD';
					}
					return { start, end, color };
				});
			});
			return medicSlots;
		}
	}

	return (
		<DefaultLayout>
			<div>
				<Select
					items={medics}
					label='Profesional de la Salud'
					placeholder='Selecciona un Profesional de la Salud'
					className='max-w-xs'
					selectedKeys={selectedMedic}
					onChange={handleMedicSelectionChange}
				>
					{(medic: any) => (
						<SelectItem key={medic.id} value={medic.id}>
							{medic.name +
								' ' +
								medic.lastName +
								' - ' +
								medic.specialty}
						</SelectItem>
					)}
				</Select>
			</div>
			<div className='flex  md:py-10 py-8'>
				<div className='w-1/4'>
					<span>
						Aquí es donde va el tablero de la configuración de
						horario
					</span>
				</div>
				<div className='w-3/4'>
					<ConfigMedicScheduleForSecretary events={events} />
				</div>
			</div>
		</DefaultLayout>
	);
}
