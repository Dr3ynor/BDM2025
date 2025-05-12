pragma solidity ^0.8.0;

contract CrowdFunding {
    struct Project {
        address payable creator;
        uint goal;
        uint deadline;
        string name;
        string description;
        string imageUrl;
        uint totalFunds;
        bool withdrawn;
        address[] funders;
        mapping(address => uint) contributions;
    }

    uint public projectCount;
    mapping(uint => Project) private projects;

    event ProjectCreated(uint id, address creator);
    event Funded(uint id, address funder, uint amount);
    event Refunded(uint id, address funder, uint amount);
    event Withdrawn(uint id);

    function createProject(string memory _name, string memory _description, string memory _imageUrl, uint _goal, uint _deadline) public {
        require(_deadline > block.timestamp, "Deadline must be in future");
        Project storage p = projects[projectCount];
        p.creator = payable(msg.sender);
        p.name = _name;
        p.description = _description;
        p.imageUrl = _imageUrl;
        p.goal = _goal;
        p.deadline = _deadline;
        emit ProjectCreated(projectCount, msg.sender);
        projectCount++;
    }

    function fundProject(uint _id) public payable {
        Project storage p = projects[_id];
        require(block.timestamp < p.deadline, "Deadline passed");
        require(msg.value > 0, "Must send ETH");
        if (p.contributions[msg.sender] == 0) {
            p.funders.push(msg.sender);
        }
        p.contributions[msg.sender] += msg.value;
        p.totalFunds += msg.value;
        emit Funded(_id, msg.sender, msg.value);
    }

    function withdraw(uint _id) public {
        Project storage p = projects[_id];
        require(msg.sender == p.creator, "Only creator");
        require(block.timestamp >= p.deadline, "Deadline not reached");
        require(p.totalFunds >= p.goal, "Goal not reached");
        require(!p.withdrawn, "Already withdrawn");
        p.withdrawn = true;
        p.creator.transfer(p.totalFunds);
        emit Withdrawn(_id);
    }

    function refund(uint _id) public {
        Project storage p = projects[_id];
        require(block.timestamp >= p.deadline, "Deadline not reached");
        require(p.totalFunds < p.goal, "Goal was reached");
        uint amount = p.contributions[msg.sender];
        require(amount > 0, "No contribution");
        p.contributions[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
        emit Refunded(_id, msg.sender, amount);
    }

    function getProject(uint _id) public view returns (
        address creator,
        uint goal,
        uint deadline,
        string memory name,
        string memory description,
        string memory imageUrl,
        uint totalFunds,
        bool withdrawn
    ) {
        Project storage p = projects[_id];
        return (p.creator, p.goal, p.deadline, p.name, p.description, p.imageUrl, p.totalFunds, p.withdrawn);
    }

    function getContribution(uint _id, address _funder) public view returns (uint) {
        return projects[_id].contributions[_funder];
    }

    function getFunders(uint _id) public view returns (address[] memory) {
        return projects[_id].funders;
    }
}
