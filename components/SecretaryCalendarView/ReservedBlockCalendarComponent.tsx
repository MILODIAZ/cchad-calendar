import {
	Popover,
	PopoverTrigger,
	Button,
	PopoverContent,
} from '@nextui-org/react';
import { PlusOneIcon } from '../icons';

export default function ReservedBlockCalendarComponent(props: any) {
	const { appointments } = props;

	return (
		<div className='flex flex-row'>
			<Popover placement='bottom' showArrow={true}>
				<PopoverTrigger>
					<Button color='default' size='sm' variant='faded'>
						{appointments[0].patient.name}{' '}
						{appointments[0].patient.lastName}
					</Button>
				</PopoverTrigger>
				<PopoverContent>
					<div className='px-1 py-2'>
						<div className='text-small font-bold'>
							{appointments[0].patient.name}{' '}
							{appointments[0].patient.lastName}
						</div>
						<div className='text-tiny'>{appointments[0].type}</div>
					</div>
				</PopoverContent>
			</Popover>
			<Popover placement='bottom' showArrow={true}>
				<PopoverTrigger>
					<Button
						color='default'
						size='sm'
						variant='faded'
						startContent={<PlusOneIcon className='w-5' />}
						isIconOnly
					></Button>
				</PopoverTrigger>
				<PopoverContent>
					<div className='px-1 py-2'>
						<div className='text-small font-bold'>
							{appointments[0].patient.name}{' '}
							{appointments[0].patient.lastName}
						</div>
						<div className='text-tiny'>{appointments[0].type}</div>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
}
