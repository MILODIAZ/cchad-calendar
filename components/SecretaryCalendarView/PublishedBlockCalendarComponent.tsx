import {
	Button,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@nextui-org/react';
import { useState } from 'react';

export default function PublishedBlockCalendarComponent() {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	return (
		<Popover placement='bottom' showArrow={true}>
			<PopoverTrigger>
				<Button color='warning' size='sm' variant='light'>
					Disponible
				</Button>
			</PopoverTrigger>
			<PopoverContent>
				<Button isLoading={isLoading} color='danger'>
					Bloquear
				</Button>
			</PopoverContent>
		</Popover>
	);
}
