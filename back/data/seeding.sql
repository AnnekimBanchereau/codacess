DELETE FROM client;
DELETE FROM responsibility;
DELETE FROM picture;
DELETE FROM question;
DELETE FROM kind;
DELETE FROM exercise;
DELETE FROM doc;
DELETE FROM theme;
DELETE FROM possible_answer;
DELETE FROM client_exercise;
DELETE FROM client_doc;
DELETE FROM theme_doc;
DELETE FROM exercise_theme;

INSERT INTO "responsibility" ("entitled")
VALUES 
('client'),
('admin')
;

INSERT INTO "picture" ("name", "path", "alternative")
VALUES 
('car.jpg', 'www.picimage.com/22122.jpg', ''),
('plane.jpg', 'www.picimage.com/331282.jpg', ''),
('profile.jpg', 'https://cdn.pixabay.com/photo/2019/12/01/23/53/otter-4666677_1280.jpg', '')
;

INSERT INTO "client" ("email", "pseudo", "password", "responsibility_id", "picture_id")
VALUES 
('toto@gamil.com', 'toto', 'totopass', 1, 3),
('jo@yahoo.fr', 'jo', 'jopassword', 1, 3),
('derf@yahoo.fr', 'derfy', 'derfypassword', 2, null)
;

INSERT INTO "kind" ("name")
VALUES 
('drag n drop'),
('code pen')
;

INSERT INTO "exercise" ("title", "brief", "published", "kind_id")
VALUES 
('attribut alt', 'exo1', 'true', 1),
('second exo', 'exo2', 'false', 2),
('troisieme exo', 'exo3', 'true', 2),
('quatrieme exo', 'exo4', 'false', 1),
('cinquieme exo', 'exo5', 'true', 1),
('sixieme exo', 'exo6', 'true', 1)
;

INSERT INTO "question" ("brief", "code", "explanation", "exercise_id", "picture_id")
VALUES 
('question 1', 'toto est', 'explanation 1', 1, 2),
('question 2', 'maman a', 'explanation 2', 2, 1),
('question 3', 'quoi', 'explanation 3', 3, 1),
('question 4', 'juste', 'explanation 4', 3, 1),
('question 5', 'ici', 'explanation 5', 4, 1),
('question 6', 'pourquoi', 'explanation 6', 2, 1),
('question 7', 'la', 'explanation 7', 1, 1)
;

INSERT INTO "doc" ("title", "brief", "slug", "content", "published", "picture_id")
VALUES 
('image', 'doc 1', 'doc-image', 'je suis le doc image', 'true', 1),
('alt', 'doc 2', 'doc-alt', 'je suis le doc alt', 'true', 2),
('doc 3', 'doc 3', 'doc-3', 'je suis le doc 3', 'true', 2),
('doc 4', 'doc 4', 'doc-4', 'je suis le doc 4', 'false', 2)
;

INSERT INTO "theme" ("name", "color")
VALUES 
('alt', 'rouge'),
('html', 'bleu'),
('theme 3', 'vert'),
('theme 4', 'jaune'),
('theme 5', 'marron'),
('theme 6', 'orange')
;

INSERT INTO "possible_answer" ("content", "correct", "question_id")
VALUES 
('i am the first answer', 'true',1),
('i am the second answer', 'false',1),
('i am the third answer', 'false',1),
('i am the four answer', 'false',1)
;
-- INSERT INTO "possible_answer" ("content", "correct", "question_id") VALUES ('i am the first answer', 'false',10),('i am the second answer', 'false',10),('i am the third answer', 'false',10),('i am the four answer', 'true',10)

INSERT INTO "client_exercise" ("score", "client_id", "exercise_id")
VALUES
(83, 2, 1),
(62, 1, 2),
(0, 3, 2),
(91, 1, 3),
(15, 3, 2),
(5, 3, 4),
(100, 3, 2)
;
 
INSERT INTO "client_doc" ("client_id", "doc_id")
VALUES
(1 ,1),
(1 ,2),
(3 ,2),
(3 ,1)
;

INSERT INTO "theme_doc" ("theme_id", "doc_id")
VALUES
(1 ,2),
(2 ,1),
(4 ,1)
;

INSERT INTO "exercise_theme" ("exercise_id", "theme_id")
VALUES
(1 ,2),
(2 ,1),
(5 ,3),
(1 ,6)
;