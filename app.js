const cartSonnectConfig = { serverId: 8360, active: true };

const cartSonnectHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_8360() {
    return cartSonnectConfig.active ? "OK" : "ERR";
}

console.log("Module cartSonnect loaded successfully.");