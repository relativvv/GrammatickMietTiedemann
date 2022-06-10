<?php

namespace App\Repository;

use App\Entity\Category;
use App\Entity\Question;
use App\Entity\Type;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class QuestionRepository extends ServiceEntityRepository
{
    public function __construct(
        private ManagerRegistry $registry,
    ) {
        parent::__construct($registry, Question::class);
    }

    public function findQuestionById(int $id)
    {
        return $this->findOneBy(['id' => $id]);
    }

    public function createCategorie(Category $category): void
    {
        $entityManager = $this->registry->getManager();
        $entityManager->persist($category);
    }

    public function createType(Type $type): void
    {
        $entityManager = $this->registry->getManager();
        $entityManager->persist($type);
    }

    public function createQuestion(Question $question): void
    {
        $entityManager = $this->registry->getManager();
        $entityManager->persist($question);
    }
}
