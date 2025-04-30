// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract VehicleDatabase {
    struct Vehicle {
        string licensePlate;
        uint256 mileage;
        string vehicleName;
        bool exists;
    }

    Vehicle[] private vehicles;
    
    // mapping from license plate to index in the vehicles array
    mapping(string => uint256) private licensePlateToIndex;
    
    // event emitted when a vehicle is added
    event VehicleAdded(string licensePlate, string vehicleName);
    
    // event emitted when a vehicle is edited
    event VehicleEdited(string licensePlate, uint256 newMileage, string newVehicleName);
    
    // function to add a new vehicle
    function addVehicle(string memory _licensePlate, uint256 _mileage, string memory _vehicleName) public {
        require(bytes(_licensePlate).length > 0, "License plate cannot be empty");
        require(bytes(_vehicleName).length > 0, "Vehicle name cannot be empty");
        require(_mileage >= 0, "Mileage cannot be negative");
        
        uint256 index = licensePlateToIndex[_licensePlate];
        require(index == 0 || !vehicles[index].exists, "Vehicle with this license plate already exists");
        // TODO: check if name is not empty, mileage >= 0
        Vehicle memory newVehicle = Vehicle({
            licensePlate: _licensePlate,
            mileage: _mileage,
            vehicleName: _vehicleName,
            exists: true
        });
        
        // add vehicle to array and update mapping
        licensePlateToIndex[_licensePlate] = vehicles.length;
        vehicles.push(newVehicle);

        emit VehicleAdded(_licensePlate, _vehicleName);
    }
    
    // get vehicle based on license plate
    function getVehicle(string memory _licensePlate) public view returns (string memory, uint256, string memory) {
        require(vehicles.length > 0, "No vehicles in database");
        
        uint256 index = licensePlateToIndex[_licensePlate];
        require(index < vehicles.length && vehicles[index].exists, "Vehicle not found");
        
        Vehicle memory vehicle = vehicles[index];
        return (vehicle.licensePlate, vehicle.mileage, vehicle.vehicleName);
    }
    
    // function to edit a vehicle's information
    function editVehicle(string memory _licensePlate, uint256 _newMileage, string memory _newVehicleName) public {
        require(vehicles.length > 0, "No vehicles in database");
        
        uint256 index = licensePlateToIndex[_licensePlate];
        require(index < vehicles.length && vehicles[index].exists, "Vehicle not found");
        
        // update information
        vehicles[index].mileage = _newMileage;
        vehicles[index].vehicleName = _newVehicleName;
        
        emit VehicleEdited(_licensePlate, _newMileage, _newVehicleName);
    }
    
    // function to get the total number of vehicles
    function getVehicleCount() public view returns (uint256) {
        return vehicles.length;
    }
    
    function getAllVehicles() public view returns (Vehicle[] memory) {
        return vehicles;
    }
    
    function getAllVehiclesDetailed() public view returns (
        string[] memory licensePlates,
        uint256[] memory mileages,
        string[] memory vehicleNames
    ) {
        uint256 count = vehicles.length;
        
        licensePlates = new string[](count);
        mileages = new uint256[](count);
        vehicleNames = new string[](count);
        
        for (uint256 i = 0; i < count; i++) {
            Vehicle memory vehicle = vehicles[i];
            licensePlates[i] = vehicle.licensePlate;
            mileages[i] = vehicle.mileage;
            vehicleNames[i] = vehicle.vehicleName;
        }
        
        return (licensePlates, mileages, vehicleNames);
    }

    function deleteVehicle(string memory _licensePlate) public {
        require(vehicles.length > 0, "No vehicles in database");
        
        uint256 index = licensePlateToIndex[_licensePlate];
        require(index < vehicles.length && vehicles[index].exists, "Vehicle not found");
        
        // Mark the vehicle as not existing instead of removing it from the array
        // This preserves the array indices for other vehicles
        vehicles[index].exists = false;
        
        // Remove the license plate from the mapping
        delete licensePlateToIndex[_licensePlate];
        
        // Emit an event for the deletion
        emit VehicleDeleted(_licensePlate);
    }
    
    // Event for vehicle deletion
    event VehicleDeleted(string licensePlate);

}
