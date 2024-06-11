CREATE TABLE Material (
    Material_id INT PRIMARY KEY,
    material_name VARCHAR(255),
    material_type VARCHAR(255),
    material_description TEXT,
    material_amount INT,
    material_order_date DATE NOT NULL,
    material_photo BLOB,
    Supplier_id INT,
    FOREIGN KEY (Supplier_id) REFERENCES Supplier(Supplier_id)
);
