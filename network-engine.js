// SOLARPUNK NETWORK ENGINE - Shared by all nodes
// This script provides networking functions

// Ensure configuration is loaded
if (!window.SOLARPUNK_NODE_CONFIG) {
    console.error('[Network] CRITICAL: network-config.js not loaded.');
}

const CONFIG = window.SOLARPUNK_NODE_CONFIG;

// Core Network Functions
async function connectToNetwork() {
    const logEl = document.getElementById('log');
    if (!logEl) return;

    addLog("[Network] Checking for peer nodes...");

    try {
        const response = await fetch(CONFIG.NETWORK_REGISTRY_URL);
        const allNodes = await response.json();

        // Filter out this node itself
        const otherNodes = allNodes.filter(node => node.id !== CONFIG.NODE_ID);
        addLog(`[Network] Found ${otherNodes.length} peer node(s).`);

        // If peers exist, simulate learning from one
        if (otherNodes.length > 0) {
            simulateLearningFromPeer(otherNodes[0]);
        }

        // Update the network status display
        updateNetworkStatus(otherNodes.length);

    } catch (error) {
        addLog("[Network] Could not reach registry. Operating in solo mode.");
        updateNetworkStatus(0);
    }
}

function simulateLearningFromPeer(peerNode) {
    const learnings = [
        `🔁 Integrated learning from ${peerNode.id}: "Optimized Docker memory usage for n8n."`,
        `🌱 Adopted knowledge from ${peerNode.id}: "New checklist for AI agent ethics."`,
        `📡 Pattern shared by ${peerNode.id}: "Community workflow reduces setup time by 50%."`,
        `🛡️ Security update from ${peerNode.id}: "Enhanced firewall rules for autonomous deployments."`,
        `🧠 AI insight from ${peerNode.id}: "Claude generated improved documentation structure."`
    ];
    const randomLearning = learnings[Math.floor(Math.random() * learnings.length)];
    addLog(randomLearning);
}

function updateNetworkStatus(peerCount) {
    // Create or update a network status element
    let statusEl = document.getElementById('network-status-display');
    if (!statusEl) {
        statusEl = document.createElement('div');
        statusEl.id = 'network-status-display';
        statusEl.style.marginTop = '20px';
        statusEl.style.padding = '20px';
        statusEl.style.background = 'rgba(0,255,157,0.1)';
        statusEl.style.border = '2px solid rgba(0,255,157,0.4)';
        statusEl.style.borderRadius = '12px';
        document.getElementById('network-status').appendChild(statusEl);
    }

    const statusMessage = peerCount > 0 
        ? `✅ Connected to <strong>${peerCount}</strong> peer(s). Network learning active.`
        : '⏳ Solo operation. Waiting for other nodes to join the network.';

    statusEl.innerHTML = `
        <h3 style="color: #00ff9d; margin-top: 0;">🌐 SolarPunk Network Status</h3>
        <p><strong>Node ID:</strong> ${CONFIG.NODE_ID}</p>
        <p><strong>Node Name:</strong> ${CONFIG.NODE_NAME}</p>
        <p><strong>Network Status:</strong> ${statusMessage}</p>
        <p><small>Updates every ${CONFIG.NETWORK_UPDATE_INTERVAL/1000} seconds.</small></p>
    `;
}

// Integrate with existing log function
function addLog(message) {
    const logEl = document.getElementById('log');
    if (logEl) {
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'});
        // Simple check to avoid exact duplicate consecutive logs
        if (!logEl.innerHTML.includes(message)) {
            logEl.innerHTML += `<br>[${time}] ${message}`;
            logEl.scrollTop = logEl.scrollHeight;
        }
    } else {
        console.log(`[SolarPunk Log] ${message}`);
    }
}

// Initialize network connection after page load
window.addEventListener('DOMContentLoaded', () => {
    addLog(`[System] Node ${CONFIG.NODE_ID} initialized.`);
    
    // Connect to network after 3 seconds
    setTimeout(connectToNetwork, 3000);
    
    // Update network status at configured interval
    setInterval(connectToNetwork, CONFIG.NETWORK_UPDATE_INTERVAL);
});
