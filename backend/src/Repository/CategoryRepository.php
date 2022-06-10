<?php

namespace App\Repository;

use App\Entity\Category;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;

class CategoryRepository extends ServiceEntityRepository
{
    public function __construct(
        private ManagerRegistry $registry,
    ) {
        parent::__construct($registry, Category::class);
    }

    public function findCategoryById(int $id): Category
    {
        return $this->findOneBy(['id' => $id]);
    }

    public function findAllCategories(): array
    {
        return $this->findAll();
    }

    public function findAllQuestionsByCategory(Category $category): array {
        return $this->findBy(['category' => $category]);
    }

    public function createQuestion(Category $question): void
    {
        $entityManager = $this->registry->getManager();
        $entityManager->persist($question);
        $entityManager->flush();
    }
}
