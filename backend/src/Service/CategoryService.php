<?php

namespace App\Service;

use App\Entity\Category;
use App\Repository\CategoryRepository;

class CategoryService
{
    public function __construct(private CategoryRepository $categoryRepository)
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
        return $this->categoryRepository->findBy(['category' => $category]);
    }
}
