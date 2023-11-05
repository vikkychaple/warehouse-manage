import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import warehousesData from '../data/warehouse.json';

function WarehouseDetail() {
  const { id } = useParams();
  const warehouseIndex = warehousesData.findIndex((w) => w.id === parseInt(id));
  const warehouse = warehousesData[warehouseIndex];

  const [isEditing, setIsEditing] = useState(false);
  const [editedWarehouse, setEditedWarehouse] = useState({ ...warehouse });

   // Load custom fields from local storage when the warehouse is first loaded.
   const [customFields, setCustomFields] = useState(
    JSON.parse(localStorage.getItem(`customFields_${id}`) || '{}')
  );

  useEffect(() => {
    if (isEditing) {
      // If in edit mode, update the edited data to reflect the changes.
      setEditedWarehouse(warehousesData[warehouseIndex]);
    }
  }, [isEditing, warehouseIndex]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // In a real-world application, you'd make an API call to save the changes on the server.
    // For this example, we'll just update the local state.
    warehousesData[warehouseIndex] = { ...editedWarehouse };
     // Save custom fields to local storage.
     localStorage.setItem(`customFields_${id}`, JSON.stringify(customFields));

    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedWarehouse({ ...warehouse });
  };
   // Function to update custom fields in edit mode.
   const handleCustomFieldChange = (field, value) => {
    setCustomFields({
      ...customFields,
      [field]: value,
    });
  };

  return (
    <div className="warehouse-details-container">
      <h1>{isEditing ? 'Edit Warehouse' : 'Warehouse Details'}</h1>
      {isEditing ? (
        <div className="edit-section">
          <label>Warehouse Name:</label>
          <input
            type="text"
            value={editedWarehouse.name}
            onChange={(e) => setEditedWarehouse({ ...editedWarehouse, name: e.target.value })}
          />
          <label>Cluster:</label>
          <input
            type="text"
            value={editedWarehouse.cluster}
            onChange={(e) => setEditedWarehouse({ ...editedWarehouse, cluster: e.target.value })}
          />
          <label>City:</label>
          <input
            type="text"
            value={editedWarehouse.city}
            onChange={(e) => setEditedWarehouse({ ...editedWarehouse, city: e.target.value })}
          />
          <label>Space Available:</label>
          <input
            type="number"
            value={editedWarehouse.space_available}
            onChange={(e) =>
              setEditedWarehouse({ ...editedWarehouse, space_available: parseInt(e.target.value) })
            }
          />
          <label>Live Status:</label>
          <select
            value={editedWarehouse.is_live ? "Online" : "Offline"}
            onChange={(e) =>
              setEditedWarehouse({ ...editedWarehouse, is_live: e.target.value === "Online" })
            }
          >
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
          {/* Custom Fields */}
          <label>Custom Field 1:</label>
          <input
            type="text"
            value={customFields.customField1 || ''}
            onChange={(e) => handleCustomFieldChange('customField1', e.target.value)}
          />

        </div>
      ) : (
        <div className="warehouse-details">
          <p><strong>Warehouse Name:</strong> {warehouse.name}</p>
          <p><strong>Cluster: </strong>{warehouse.cluster}</p>
          <p><strong>City:</strong> {warehouse.city}</p>
          <p><strong>Space Available: </strong>{warehouse.space_available}</p>
          <p><strong>Live Status: </strong>{warehouse.is_live ? "Online" : "Offline"}</p>
          <p><strong>Custom Field 1:</strong> {customFields.customField1 || '-'}</p>
         
        </div>
      )}

      {isEditing ? (
        <div  className="button-container">
                  <button className="save-button" onClick={handleSaveClick}>
Save</button>
<button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div>
                  <button className="edit-button" onClick={handleEditClick}>
Edit</button>
<Link to="/warehouses" className="back-link">Back to warehouse</Link>
        </div>
      )}
    </div>
  );
}

export default WarehouseDetail;
