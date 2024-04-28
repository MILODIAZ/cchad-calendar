const getMedicForSecretaryQuery = `
  query getMedicForSecretaryQuery($id: Int!) {
    medic(id: $id) {
        name
        lastName
        specialty
        schedules {
          public
          time
          box {
            name
            branch {
              name
            }
          }
          slots {
            time
            blocked
            appointments {
              id
              state
              confirmed
              type
              patient {
                id
                name
                lastName                
              }
            }
          }
        }
    }
  }
`;

export async function getMedicForSecretary(id: number) {
	let variables: { id: number } = {
		id,
	};
	let results = await fetch('http://localhost:3000/graphql', {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			query: getMedicForSecretaryQuery,
			variables,
		}),
	});
	let medic = await results.json();
	return medic.data.medic;
}

const getMedicsForSecretaryQuery = `
  query {
    medics {
      id
      name
      lastName
      specialty
    }
  }
`;

export async function getMedicsForSecretary() {
	let results = await fetch('http://localhost:3000/graphql', {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			query: getMedicsForSecretaryQuery,
		}),
	});
	let medics = await results.json();
	return medics.data.medics;
}

const blockSlotMutation = `
  mutation blockSlotMutation($id: Int!) {
    blockSlot(id: $id) {
      id
    }
  }
`;

export async function blockSlot(id: number) {
	let variables: { id: number } = {
		id,
	};
	let results = await fetch('http://localhost:3000/graphql', {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			query: blockSlotMutation,
			variables,
		}),
	});
	let result = await results.json();
	return result.data.blockSlot.id;
}

const unlockSlotMutation = `
  mutation unlockSlotMutation($id: Int!) {
    unlockSlot(id: $id) {
      id
    }
  }
`;

export async function unlockSlot(id: number) {
	let variables: { id: number } = {
		id,
	};
	let results = await fetch('http://localhost:3000/graphql', {
		method: 'POST',

		headers: {
			'Content-Type': 'application/json',
		},

		body: JSON.stringify({
			query: unlockSlotMutation,
			variables,
		}),
	});
	let result = await results.json();
	return result.data.unlockSlot.id;
}
