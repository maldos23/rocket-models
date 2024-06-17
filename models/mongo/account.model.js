import { Schema , model} from "mongoose";

const accountSchema = new Schema({
    email: { type: String, required: true },
    "id-client": { type: String, required: true },
});

const Account = model('accounts', accountSchema);

export default Account;
