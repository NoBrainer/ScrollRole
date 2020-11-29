import Dexie from "dexie";

const db = new Dexie('ScrollRoleAppState');
db.version(1).stores({
	characters: "++id, name, config",
	rules: "++id, name, config",
});
// db.open();

export default db