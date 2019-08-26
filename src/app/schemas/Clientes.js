import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema(
  {
    codigo: {
      type: Number,
      required: true,
    },
    client: {
      type: String,
      required: true,
    },
    host: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    pass: {
      type: String,
      required: true,
    },
    dbname: {
      type: String,
      required: true,
    },
    bloqueado: {
      type: Boolean,
      required: true,
      default: false,
    },
    prefixo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Client', ClientSchema);
