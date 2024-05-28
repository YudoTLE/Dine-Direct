import mongoose, { ConnectOptions } from 'mongoose';

export const ConnectMongoDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions);

        console.log('Database successfully connected');
    } catch (error) {
        console.error('Failed to connect to database:', error);
        // Throw the error to signal that the connection attempt failed
        throw error;
    }
};

export default ConnectMongoDB