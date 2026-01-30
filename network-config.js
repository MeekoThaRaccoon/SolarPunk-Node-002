// NETWORK CONFIGURATION for SolarPunk Autonomous Node
// This node's unique identity in the network
window.SOLARPUNK_NODE_CONFIG = {
    NODE_ID: 'san-node-002', // CRITICAL: This must be unique. Changed from 001.
    NODE_NAME: 'SolarPunk Node #002',
    NODE_DESCRIPTION: 'The second autonomous node in the network.',
    NODE_URL: 'https://meekotharaccoon.github.io/SolarPunk-Node-002/', // Must match your actual URL
    // The shared registry of all nodes
    NETWORK_REGISTRY_URL: 'https://raw.githubusercontent.com/MeekoThaRaccoon/SolarPunk-Network-Registry/main/nodes.json',
    // How often to check for network peers (in milliseconds)
    NETWORK_UPDATE_INTERVAL: 30000 // Every 30 seconds
};
