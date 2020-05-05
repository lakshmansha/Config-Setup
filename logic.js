var env_inputs = require('./config/env-input.json');

const getConfig = (app, env) => {
    const env_Config = env_inputs.filter((obj) => {
        return obj.Code === app;
    });

    let envirnments = [];

    if (env_Config.length > 0) {
        envirnments = env_Config[0].Envirnoments.filter((obj) => {
            return obj.EnvName === env;
        });
    }

    let config = {};
    if (envirnments.length > 0) {
        config = envirnments[0].EnvConfig;
    }

    return config;
};

exports.getConfig = getConfig;
