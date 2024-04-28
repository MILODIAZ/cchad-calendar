import {
	Popover,
	PopoverTrigger,
	Button,
	PopoverContent,
} from '@nextui-org/react';
import { useState } from 'react';

export default function BlockedBlockCalendarComponent() {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	return (
		<Popover placement='bottom' showArrow={true}>
			<PopoverTrigger>
				<Button color='danger' size='sm' variant='light'>
					Bloqueado
				</Button>
			</PopoverTrigger>
			<PopoverContent>
				<Button isLoading={isLoading}>Desbloquear</Button>
			</PopoverContent>
		</Popover>
	);
}
