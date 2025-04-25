# Clube_do_Vinho
Projeto Integrado Proz Educação
link Canvas:
https://www.canva.com/design/DAGeADUMVL4/-uJagImDXUWZIVNdwa8V-Q/edit

Diagrama Entidade Relacionamento

![alt text](imagens/DER.png)


```
   
  CREATE TABLE parceiro (
  nome VARCHAR(50) PRIMARY KEY,
  site VARCHAR(100),
  telefone VARCHAR(100)
  );
  
  CREATE TABLE vinho (
  id serial PRIMARY KEY,
  nome VARCHAR(100),
  tipo VARCHAR(30),
  safra INT,
  pais VARCHAR(30),
  sugerir_parceiro VARCHAR(30),
  FOREIGN KEY (sugerir_parceiro) REFERENCES parceiro(nome)
  );
  
  CREATE TABLE usuario (
  id serial PRIMARY KEY,
  nome VARCHAR(100),
  sobrenome VARCHAR(100),
  email VARCHAR(100),
  data_cadastro DATE
  );
  
  CREATE TABLE avaliacao (
  id_usuario INT NOT NULL,
  id_vinho INT NOT NULL,
  nota FLOAT NOT NULL,
  comentario TEXT NOT NULL,
  data_avaliacao date,
  PRIMARY KEY (id_usuario, id_vinho),
  FOREIGN KEY (id_usuario) REFERENCES usuario(id),
  FOREIGN KEY (id_vinho) REFERENCES vinho(id)
  );
  
  INSERT INTO parceiro (nome, site, telefone) VALUES
  ('Evino', 'www.evino.com.br', '+55 (11) 4200-4999'),
  ('Wine', 'www.wine.com.br', '+ 55 (31) 93500-4476'),
  ('Divvino', 'www.divvino.com.br', '+55 (48) 4020 2004'),
  ('Grand Cru', 'www.grandcru.com.br', '+55 (11) 4040 2562');
  
  INSERT INTO vinho (nome, tipo, safra, pais, sugerir_parceiro) VALUES
  ('Concha Y Toro Reservado Cabernet Sauvignon', 'Tinto', 2019, 'Chile', 'Evino'),
  ('Casillero Del Diablo Merlot', 'Tinto', 2014, 'Chile', 'Wine'),
  ('Benjamin', 'Branco', 2018, 'Argentina', 'Divvino'),
  ('Casal Garcia', 'Verde', 2018, 'Portugal', 'Grand Cru');
  
  INSERT INTO usuario (nome, sobrenome, email, data_cadastro) VALUES
  ('Amanda', 'Bazante', 'amanda@gmail.com', '2024-10-12'),
  ('Caio', 'Martins', 'caio@gmail.com', '2024-11-20'),
  ('Pedro', 'Rian', 'pedro@gmail.com', '2024-07-17'),
  ('Wagner', 'Camargo', 'wagner@gamil.com', '2024-10-10');
  
  INSERT INTO avaliacao (id_usuario, id_vinho, nota, comentario, data_avaliacao) VALUES
  (3, 1, 4.6, 'Com notas intensas de frutas escuras e um toque de carvalho, é um vinho encorpado e elegante. Perfeito para acompanhar carnes vermelhas e pratos sofisticados.', '2025-03-18'),
  (1, 3, 4.7, 'O produto é ótimo para quem gosta de um vinho branco suave . É para tomar geladinho! Delícia!', '2025-04-17'),
  (2, 4, 4.5, 'Leve, fresco e com um toque cítrico que combina perfeitamente com dias quentes. Ideal para acompanhar pratos leves ou simplesmente para apreciar sozinho.', '2025-03-01'),
  (1, 2, 4.4, 'Um tinto cheio de personalidade: frutas escuras, toque de madeira e um final gostoso. Fácil de beber, combina demais com aquele churrasco ou jantar caprichado. Ótima pedida!', '2025-01-10');

SELECT * FROM parceiro;
```

![44a81810-77fe-4135-b3a3-ef39bdb54f83](https://github.com/user-attachments/assets/83a690fb-1e10-4f35-8330-dd316cf707c8)
```
SELECT * from vinho;
```

![e4638897-e1d8-45c2-bbba-e41bd3b938cb](https://github.com/user-attachments/assets/57eb876a-4b2b-4b22-babb-a01a0bb4a5dd)
```
SELECT * from usuario;
```

![0ae1c916-485c-4880-941b-8ef4df8164ad](https://github.com/user-attachments/assets/26143f60-0980-4f0d-af1e-dce862bac199)
```
SELECT * from avaliacao;
```

![3eb88d29-bb40-44d4-8b70-70e078e8259b](https://github.com/user-attachments/assets/3ef30a42-b9ba-4e5e-b506-1acc257f9265)
```
SELECT nome, comentario from vinho JOIN avaliacao ON vinho.id = avaliacao.id_vinho;
```

![fdf50a63-ec45-4d17-aa77-e7ae383cc42b](https://github.com/user-attachments/assets/819a34df-150a-407c-abb6-880d104fa363)
```
SELECT vinho.nome, parceiro.nome from vinho join parceiro on vinho.sugerir_parceiro = parceiro.nome;
```

![ad50f8ec-952e-45ae-8e02-c28da1224e1d](https://github.com/user-attachments/assets/7237cd54-a4d9-451d-9b0c-8850b2e6f6d8)
```
SELECT usuario.nome, avaliacao.nota, vinho.nome FROM usuario JOIN avaliacao on usuario.id = avaliacao.id_usuario join vinho on avaliacao.id_vinho = vinho.id;
```

![3fba9609-2fc8-4771-b771-3094a4b64cdb](https://github.com/user-attachments/assets/8d5fd997-6793-49b4-83d9-b74dff8bf5ea)

