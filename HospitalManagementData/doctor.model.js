import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department"
    }
}, { timestamps: true })


export const Doctor = mongoose.model("Doctor", doctorSchema)




// Kothin.......
// Tomake chhara ekdin
// Katano ek raat, barao du haat
// hoye jao aaj badha-bihin..
// Bolo, kobita hoye cholo….
// Bagane dabanol, jomano jol
// Chhoray jemon thikana-hin......


// O Cheyechi jotobari
// hoyeche chharachhari…
// Morechi totobari..
// Eseche ek bedona din….

// Kothin........
// Tomake chara ekdin........

// Na na na na
// Na na na na
// Na na na na
// Na na na na na…….


// Ek chilekothay
// tomay dekhechilam
// Jhul barandatay
// koto bhul chuk enkechilam
// Ek chilekothay
// tomay dekhechilam..
// Jhul baranda-taay
// koto bhul chuk enkechilam


// Porechi soja bole
// Bolechi kona gune
// Cholechhi sure sure
// Tomar amar ontohin..


// Kothin........
// Tomake chara ekdin…..


// Track
// Arranged
// By
// Roy_S_


// Kom holeo hok
// amader dekhashona
// Sei chora chomok
// chhaposha o anmona
// Kom holeo hok
// amader dekhashona
// Sei chora chamok
// chhaposha o aanmona….


// O cheyechi jotobari
// hoyeche chharachhari
// Morechi totobari
// Eseche ek bedona din

// Kothin.......
// Tomake chara ekdin......

// Na na na na
// Na na na na
// Na na na na
// Na na na na na…….