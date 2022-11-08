import Realm from "realm"

const SCHEMA_VERSION = 1

// const UserSchema = {
//     name: 'User',
//     properties: {
//         id: "int",
//         name: "string",
//         email: "string",
//         password: "string",
//     }
// }

const TodoSchema = {
    name: "todos",
    properties: {
        Title: "string",
        Discription: "string",
        DueDate: "string",
        Status: "string",
    }
}

const realm = new Realm({
    schemaVersion: SCHEMA_VERSION,
    schema: [TodoSchema],
    shouldCompactOnLaunch: () => true
});

export function getRealmPAth() {
    return realm.path;
}

export function save(table, object) {
    if (Array.isArray(object)) realm.write(() => object.forEach(data => realm.create(table, data, true)));
    else realm.write(() => realm.create(table, object, true));
}

export function deleteRealm(object) {
    if (Array.isArray(object)) realm.write(() => object.forEach(data => realm.delete(data)));
    else realm.write(() => realm.delete(object));
}

export function fetchObjects(table) {
    let results = realm.objects(table)
    console.log(`\n[Realm] ${table} - ${results.length} items found.`)
    return results;
}