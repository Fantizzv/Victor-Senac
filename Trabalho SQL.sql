--controle de acesso
CREATE TABLE cargos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(255) UNIQUE NOT NULL,
  descricao TEXT,
  criado_em TIMESTAMPZ DEFAULT NOW(),
);

CREATE TABLE permissoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  chave VARCHAR(255) UNIQUE NOT NULL,
  descricao TEXT,
  criado_em TIMESTAMPZ DEFAULT NOW(),
);

CREATE TABLE cargo_permissoes (
  cargo_id UUID,
  permissao_id UUID
  PRIMARY KEY (cargo_id, permissao_id)
  PRIMARY KEY (cargo_id) REFERENCES cargos (id) ON DELETE CASCADE,
  PRIMARY KEY (permissao_id) REFERENCES permissoes (id) ON DELETE CASCADE,
  UNIQUE (cargo_id, permissao_id),
);


--entidades base
create table unidades (
  id UUID PRIMERY KEY DEFAULT get_random_uuid(),
  nome VARCHAR(255) NOT NULL,
  endereco TEXT NOT NULL,
  telefone VARCHAR(255),
  criado_em TIMESTAMP DEFAULT NOW(),
);

create table usuarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  cargo_id UUID,
  ativado BOOLEAN DEFAULT TRUE,
  criado_em TIMESTAMPZ DEFAULT NOW(),
  ultimo_login TIMESTAMPZ NULL,
  FOREIGN KEY (cargo_id) REFERENCES cargos (id) ON DELETE SET NULL,
);

CREATE TABLE usuario_unidades (
  usuario_id UUID,
  unidade_id UUID,
  PRIMARY KEY (usuario_id, unidade_id)
  PRIMARY KEY (usuario_id) REFERENCES usuarios (id) ON DELETE CASCADE,
  PRIMARY KEY (unidade_id) REFERENCES unidades (id) ON DELETE CASCADE,
  UNIQUE (usuario_id, unidade_id),
);

CREATE TABLE permissoes_temporarias (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID,
  permissao_id UUID,
  unidade_id UUID,
  expira_em TIMESTAMPZ NOT NULL,
  criado_em TIMESTAMPZ DEFAULT NOW(),
  FOREIGN KEY (usuario_id) REFERENCES usuarios (id) ON DELETE CASCADE,
  FOREIGN KEY (permissao_id) REFERENCES permissoes (id) ON DELETE CASCADE,
  FOREIGN KEY (unidade_id) REFERENCES unidades (id) ON DELETE CASCADE,
);


--clínica e atendimento
create table pacientes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(255) NOT NULL,
  cpf VARCHAR(255) UNIQUE NOT NULL,
  data_nascimento DATE NOT NULL,
  telefone VARCHAR(255) NULL,
  email VARCHAR(255) NULL,
  historico_contato TEXT NULL,
  criado_em TIMESTAMPZ DEFAULT NOW(),
);

create table consultas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  paciente_id UUID,
  profissional_id UUID,
  unidade_id UUID,
  data_hora TIMESTAMPZ NOT NULL,
  status VARCHAR(255) DEFAULT 'Agendado',
  criado_em TIMESTAMPZ DEFAULT NOW(),
  FOREIGN KEY (paciente_id) REFERENCES pacientes (id) ON DELETE CASCADE,
  FOREIGN KEY (profissional_id) REFERENCES usuarios (id) ON DELETE RESTRICT,
  FOREIGN KEY (unidade_id) REFERENCES unidades (id) ON DELETE RESTRICT,
);

create table prontuarios(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consulta_id UUID UNIQUE,
  paciente_id UUID,
  anotacoes_clinicas TEXT NOT NULL,
  criado_por UUID,
  criado_em TIMESTAMPZ DEFAULT NOW(),
  FOREIGN KEY (consulta_id) REFERENCES consultas (id) ON DELETE RESTRICT,
  FOREIGN KEY (paciente_id) REFERENCES pacientes (id) ON DELETE CASCADE,
  FOREIGN KEY (criado_por) REFERENCES usuarios (id) ON DELETE SET NULL,
);


--segurança
create table logs_auditoria (
  id BIGSERIAL PRIMARY KEY, 
  usuario_id UUID,
  acao VARCHAR(255) NOT NULL,
  tabela VARCHAR(255) NOT NULL,
  registro_id VARCHAR(255) NOT NULL,
  dados_antigos JSONB NULL,
  dados_novos JSONB NULL,
  criado_em TIMESTAMPZ DEFAULT NOW(),
  FOREIGN KEY (usuario_id) REFERENCES usuarios (id) ON DELETE SET NULL,
);