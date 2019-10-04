window.superagent
    .get('https://blockapi.turtlepay.io/node/stats')
    .then(res => {


        res.body.forEach(value => {

            var nodename = value['url'];

            if (nodename == "turtlenode.co") {

                var nodeName = value.name;
                var nodeUrl = value.url;
                var nodePort = value.port;
                var nodeFee = value.fee.amount / 100;
                var nodeAddress = value.fee.address;
                var nodeStatus = value.online;


                var url = document.getElementById("url");


                url.innerHTML = `<span class="icon has-text-warning">
                                <i class="fas fab fa-wolf-pack-battalion"></i>
                                </span>Node address: ${nodeUrl}
                                <button  class="btn button is-success" data-clipboard-text="turtlenode.co">
                                    Click to copy node address
                                </button>`;


                var fee = document.getElementById("fee");

                fee.innerHTML = `<span class="icon has-text-danger">
                                <i class="fas fa-wallet"></i>
                                </span>Node fee: ${nodeFee}<span class="tag is-success">TRTL</span>`;


                var name = document.getElementById("name");

                name.innerHTML = `<span class="icon has-text-warning">
                                <i class="fas fa-globe"></i>
                                </span></i>Node name: <span class="tag is-warning">${nodeName}</span>`;

                var status = document.getElementById("status");

                status.innerHTML = `<span class="icon has-text-info">
                                    <i class="fas fa-spinner fa-pulse"></i>
                                    </span></i>Online?: <span class="tag is-success">${nodeStatus}</span>`;

            }


        })



    });