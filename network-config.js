// NETWORK CONFIGURATION for SolarPunk Autonomous Node
// This node's unique identity in the network
window.SOLARPUNK_NODE_CONFIG = {
    NODE_ID: 'san-node-001', // YOU ARE NODE #1. Others must change this.
    NODE_NAME: 'The First Node',
    NODE_DESCRIPTION: 'The original SolarPunk Autonomous Live instance.',
    NODE_URL: 'https://meekotharaccoon.github.io/SolarPunk-Autonomous-Live/',
    // The shared registry of all nodes
    NETWORK_REGISTRY_URL: 'https://raw.githubusercontent.com/MeekoThaRaccoon/SolarPunk-Network-Registry/main/nodes.json',
    // How often to check for network peers (in milliseconds)
    NETWORK_UPDATE_INTERVAL: 30000 // Every 30 seconds
};
