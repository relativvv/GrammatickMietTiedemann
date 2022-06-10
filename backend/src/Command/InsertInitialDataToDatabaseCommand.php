<?php

namespace App\Command;

use App\Entity\Category;
use App\Entity\Question;
use App\Entity\Type;
use App\Repository\QuestionRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class InsertInitialDataToDatabaseCommand extends Command
{
    protected static $defaultName = 'app:insert-initial-data';
    private EntityManagerInterface $entityManager;
    private QuestionRepository $questionRepository;

    public function __construct(QuestionRepository $questionRepository, EntityManagerInterface $entityManager) {
        parent::__construct();
        $this->questionRepository = $questionRepository;
        $this->entityManager = $entityManager;
    }

    private function createQuestion(string $askedQuestion, array $answers, Category $category, Type $type): Question
    {
        $question = new Question();
        $question->setType($type);
        $question->setCategory($category);
        $question->setQuestion($askedQuestion);
        $question->setAnswers($answers);

        return $question;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $type = new Type();
        $type->setName('Multiple choice');
        $this->questionRepository->createType($type);

        $categorie = new Category();
        $categorie->setName('Alltägliche Fehler');
        $categorie->setDescription(' ');
        $this->questionRepository->createCategorie($categorie);

        $question  = $this->createQuestion('Welche der folgenden Schreibweisen ist richtig?', ['Gar nicht', 'Garnicht'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Welche der folgenden Schreibweisen ist richtig?', ['Loser', 'Looser'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Welche der folgenden Schreibweisen ist richtig?', ['Stegreif', 'Stehgreif'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Welche der folgenden Schreibweisen ist richtig?', ['Einzige', 'Einzigste'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Welche der folgenden Schreibweisen ist richtig?', ['Brillant', 'Brilliant'], $categorie, $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Welche der folgenden Schreibweisen ist richtig?', ['Rhythmus', 'Rythmus'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Welche der folgenden Schreibweisen ist richtig?', ['Grölen', 'Gröhlen'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Welche der folgenden Schreibweisen ist richtig?', ['nichtsdestotrotz', 'nichts desto trotz'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Welche der folgenden Schreibweisen ist richtig?', ['Widerspruch', 'Wiederspruch'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Welche der folgenden Schreibweisen ist richtig?', ['abwegig', 'abwägig'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $categorie = new Category();
        $categorie->setName('Satzbau');
        $categorie->setDescription(' ');
        $this->questionRepository->createCategorie($categorie);

        $question  = $this->createQuestion('Welcher Satzbau ist richtig?  ', ['Ich wohne in Berlin.', 'Ich in Berlin wohnen.'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Welcher Satzbau ist richtig?  ', ['Heute gehe ich einkaufen. ', 'Einkaufen ich heute gehen.'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Welcher Satzbau ist richtig?  ', ['Am Mittwoch werde ich Sport machen. ', 'Sport machen am Mittwoch werde ich'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Welcher Satzbau ist richtig?  ', ['In einem Monat werde ich nach Dortmund umziehen. ', 'Nach Dortmund umziehen ich werde in einem Monat.  '], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Welcher Satzbau ist richtig?  ', ['Am liebsten magst Du Salat. ', 'Salat du am liebsten magst.'],$categorie, $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Welcher Satzbau ist richtig?  ', ['Ich fliege mit meinen Freunden am Sonntag nach Mallorca.  ', 'Mit meinen Freunden nach Mallorca ich fliege am Sonntag. '], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Welcher Satzbau ist richtig?  ', ['Ab morgen wohnen wir in Frankfurt. ', 'Wir ab morgen in Frankfurt wohnen. '], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $type = new Type();
        $type->setName('Eingabe der Antwort');
        $this->questionRepository->createType($type);

        $categorie = new Category();
        $categorie->setName('ss oder ß');
        $categorie->setDescription(' ');
        $this->questionRepository->createCategorie($categorie);

        $question  = $this->createQuestion('Fä__er', ['Fässer', 'Fäßer'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Fä__er', ['Fässer', 'Fäßer'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Fu__', ['Fuß', 'Fuss'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Se__el', ['Sessel', 'Seßel'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Grü__e', ['Grüße', 'Grüsse'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Schlü__el', ['Schlüssel', 'Schlüßel'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Es hei__t', ['heißt', 'heisst'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Se__el', ['Sessel', 'Seßel'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question  = $this->createQuestion('Se__el', ['Sessel', 'Seßel'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $categorie = new Category();
        $categorie->setName('Setze die richtigen Konjunktionen ein');
        $categorie->setDescription(' ');
        $this->questionRepository->createCategorie($categorie);

        $question = $this->createQuestion('Thomas liebt es, Fußball zu spielen, ____ er sich da so richtig austoben kann ____ mit seinen Freunden zusammen ist.', ['weil', 'du'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question = $this->createQuestion('Theresa fährt morgen mit ihren Eltern in den Urlaub; ____ erledigt sie ihre Hausaufgaben noch heute, ____ sie sich am Strand so richtig entspannen kann. ', ['darum', 'damit'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question = $this->createQuestion('Verena fragt ihren Kollegen, ____ sie morgen gemeinsam zur Arbeit fahren könnten, ____ das für ihn in Ordnung wäre. ', ['ob', 'sofern'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question = $this->createQuestion('____ wir gehen heute ins Kino ____ zusammen zum Bowlen. ', ['Entweder', 'oder'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question = $this->createQuestion('Der Lehrer hat nicht den Eindruck, ____ würden die Schüler lernen. ', ['als'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question = $this->createQuestion('Die Schüler haben jetzt nicht Deutsch, ____ Spanisch.', ['sondern'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question = $this->createQuestion('Alle waren froh, ____ die Schulglocke den Anfang der Sommerferien einläutete.', ['nachdem'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question = $this->createQuestion('Theresa hat sich zwar bei Anna entschuldigt, ____ ist sie immer noch sauer.', ['trotzdem'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $type = new Type();
        $type->setName('Antwort anklicken');
        $this->questionRepository->createType($type);

        $categorie = new Category();
        $categorie->setName('derselbe/dieselbe/dasselbe oder der/die/das');
        $categorie->setDescription(' ');
        $this->questionRepository->createCategorie($categorie);

        $question = $this->createQuestion('Ich fand deine Bluse so schön, dass ich mir ______ gekauft habe.', ['die Gleiche'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question = $this->createQuestion('Wir wohnen immer noch ______ Haus wie vor fünf Jahren. ', ['im selben'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question = $this->createQuestion('Ich sitze seit zwei Stunden an ein und ______ Aufgabe und werde einfach nicht fertig! ', ['derselben'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question = $this->createQuestion('Diese Hose ist hübsch, aber hat deine Schwester nicht _______?', ['die gleiche'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question = $this->createQuestion('Das ist sogar _______ Hose. Ich habe sie mir bloß für heute ausgeliehen.', ['dieselbe'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $categorie = new Category();
        $categorie->setName('Welches der Wörter wird groß geschrieben?');
        $categorie->setDescription(' ');
        $this->questionRepository->createCategorie($categorie);

        $question = $this->createQuestion('Der ________ weiß das er auf dem Fahrradweg fahren muss.', ['Fahrradfahrer', 'fahrradfahrer'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question = $this->createQuestion('Gestern Nacht durchbrach ein Mann, während er schlafwandelte, dass an einer Stelle  _____ Geländer seines Balkons im ersten Stock und stürzte in ein Blumenbeet. ', ['morsche', 'Morsche'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question = $this->createQuestion('Die Sportfreunde Stiller sind unter ______ zu finden.', ['Deutschrock', 'deutschrock'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question = $this->createQuestion('Er ist ein professioneller ____.', ['Händler', 'händler'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question = $this->createQuestion('Ich hasse es, meine eigene _____ zu hören. ', ['Stimme', 'stimme'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question = $this->createQuestion('______ ist leider nicht vegan.  ', ['Joghurt', 'joghurt'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question = $this->createQuestion('Viele meiner Freunde wissen gar nicht das ich ______. ', ['existiere', 'Existiere'], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $question = $this->createQuestion('Auf wessen ______ habe ich geparkt? ', ['', ''], $categorie,  $type);
        $this->questionRepository->createQuestion($question);

        $this->entityManager->flush();

        $io = new SymfonyStyle($input, $output);
        $io->success('Data inserted!');

        return Command::SUCCESS;
    }
}
