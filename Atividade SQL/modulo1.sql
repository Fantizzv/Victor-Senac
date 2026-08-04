-- 1. Liste todos os pacientes cadastrados.
SELECT *
, FROM patients;

-- ----------------------------------------------------------

-- 2. Liste os pacientes em ordem alfabética pelo nome.
SELECT * FROM patients 
ORDER BY full_name ASC;

-- ----------------------------------------------------------

-- 3. Liste as consultas realizadas em uma data específica (ex: '2025-06-01').
SELECT * FROM consultations 
WHERE scheduled_at::DATE = '2025-06-01';

-- ----------------------------------------------------------

-- 4. Liste os médicos de uma determinada especialidade.
-- Nota: Como o banco utiliza a tabela 'users' + 'roles' para definir médicos, 
-- filtramos os usuários que possuem a role de 'Médico'.
SELECT u.* FROM users u
INNER JOIN user_roles ur ON u.id = ur.user_id
INNER JOIN roles r ON ur.role_id = r.id
WHERE r.name = 'Médico';

-- ----------------------------------------------------------

-- 5. Liste os pacientes cujo nome começa com a letra 'A'.
SELECT * FROM patients 
WHERE full_name LIKE 'A%';

-- ----------------------------------------------------------

-- 6. Liste o nome do paciente e a data da consulta (utilizar JOIN entre pacientes e consultas).
SELECT p.full_name AS nome_paciente, c.scheduled_at AS data_consulta 
FROM consultations c
INNER JOIN patients p ON c.patient_id = p.id;

-- ----------------------------------------------------------

-- 7. Liste o nome do paciente, o nome do médico e a data da consulta (utilizar múltiplas tabelas).
SELECT p.full_name AS nome_paciente, u.full_name AS nome_medico, c.scheduled_at AS data_consulta 
FROM consultations c
INNER JOIN patients p ON c.patient_id = p.id
INNER JOIN users u ON c.doctor_id = u.id;

-- ----------------------------------------------------------

-- 8. Liste os pacientes atendidos por um médico específico (filtrar por nome do médico).
SELECT DISTINCT p.* FROM consultations c
INNER JOIN patients p ON c.patient_id = p.id
INNER JOIN users u ON c.doctor_id = u.id
WHERE u.full_name = 'Camila Silva';

-- ----------------------------------------------------------

-- 9. Liste consultas realizadas após uma data específica e de uma determinada especialidade (usar AND).
-- Nota: Adaptado para filtrar pela role 'Médico', devido à estrutura do banco fornecido.
SELECT c.* FROM consultations c
INNER JOIN users u ON c.doctor_id = u.id
INNER JOIN user_roles ur ON u.id = ur.user_id
INNER JOIN roles r ON ur.role_id = r.id
WHERE c.scheduled_at > '2025-01-01' 
  AND r.name = 'Médico';

-- ----------------------------------------------------------

-- 10. Liste o nome do paciente, médico, especialidade e data da consulta, 
-- filtrando pacientes com nome iniciado em 'M' e ordenado pela data mais recente.
SELECT 
    p.full_name AS nome_paciente, 
    u.full_name AS nome_medico, 
    r.name AS perfil_especialidade, 
    c.scheduled_at AS data_consulta 
FROM consultations c
INNER JOIN patients p ON c.patient_id = p.id
INNER JOIN users u ON c.doctor_id = u.id
INNER JOIN user_roles ur ON u.id = ur.user_id
INNER JOIN roles r ON ur.role_id = r.id
WHERE p.full_name LIKE 'M%'
ORDER BY c.scheduled_at DESC;