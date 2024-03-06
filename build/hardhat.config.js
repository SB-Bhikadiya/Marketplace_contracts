"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomicfoundation/hardhat-toolbox");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const config = {
    solidity: {
        version: "0.8.20", // Specify compiler version
        settings: {
            optimizer: {
                enabled: true,
                runs: 200, // Adjust optimization runs as needed
            },
        },
    },
    networks: {
        ganache: {
            url: "http://127.0.0.1:7545",
            gas: "auto",
            gasPrice: "auto",
            timeout: 10000,
            chainId: 1337,
            accounts: [
                process.env.ACCOUNT_0 || "",
                process.env.ACCOUNT_1 || "",
                process.env.ACCOUNT_2 || "",
                process.env.ACCOUNT_3 || "",
                process.env.ACCOUNT_4 || "",
                process.env.ACCOUNT_5 || "",
                process.env.ACCOUNT_6 || "",
                process.env.ACCOUNT_7 || "",
                process.env.ACCOUNT_8 || "",
                process.env.ACCOUNT_9 || "",
            ],
        },
    },
};
exports.default = config;