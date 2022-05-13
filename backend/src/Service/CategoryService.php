<?php

namespace App\Service;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use App\Repository\QuestionRepository;

class CategoryService
{
    public function __construct(private CategoryRepository $categoryRepository, private QuestionRepository $questionRepository)
    {
    }

    public function findCategoryById(int $id): Category
    {
        return $this->categoryRepository->findCategoryById($id);
    }

    public function getAllCategories(): array
    {
        return $this->categoryRepository->findAllCategories();
    }

    public function getAllQuestionsByCategory(Category $category): array
    {
        return $this->questionRepository->findBy(['category' => $category]);
    }
}
