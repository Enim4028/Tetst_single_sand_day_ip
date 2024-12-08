const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://fetyfnyjghfcykjdhsht.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZldHlmbnlqZ2hmY3lramRoc2h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2NTg3MjEsImV4cCI6MjA0OTIzNDcyMX0.q54RZALIwrKo8Y66_VvN0T4JS1VbSWPkBIo2AOCpd78';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

exports.handler = async (event) => {
    const { message } = JSON.parse(event.body);

    // Controlla l'IP e il timestamp (implementa la tua logica)
    // ...

    try {
        const { data, error } = await supabase
            .from('messages')
            .insert([{ message, created_at: new Date() }]);

        if (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'Errore durante il salvataggio del messaggio' })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Messaggio salvato!' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Errore imprevisto' })
        };
    }
};