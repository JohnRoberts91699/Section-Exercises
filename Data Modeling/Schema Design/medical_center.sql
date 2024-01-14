CREATE TABLE Doctor (
    doctor_id INT PRIMARY KEY,
    name VARCHAR(255),
    specialization VARCHAR(255)
);


CREATE TABLE Patient (
    patient_id INT PRIMARY KEY,
    name VARCHAR(255),
    age INT,
    gender VARCHAR(255)
);


CREATE TABLE Visit (
    visit_id INT PRIMARTY KEY,
    doctor_id INT,
    patient_id INT,
    visit_date INT,
    diagnosis VARCHAR(255),
    FOREIGN KEY (doctor_id) REFERENCES Doctor(doctor_id),
    FOREIGN KEY (patient_id) REFERENCES Patient(patient_id)
);


CREATE TABLE Disease (
    disease_id INT PRIMARY KEY,
    visit_id INT,
    disease_name VARCHAR(255),
    FOREIN KEY (visit_id) REFERENCES Visit(visit_id)
)