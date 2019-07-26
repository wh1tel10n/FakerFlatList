import faker from 'faker';

const randomUsers = (count=10) =>{
    const arr = []
    for (let i = 0 ; i < count ; i++) {
        arr.push({
            key: faker.random.uuid(),
            name: faker.name.firstName(),
            phoneNumber: faker.phone.phoneNumber(),
            avatar: faker.image.avatar()
        })
    }
    return arr;
}

export default randomUsers;