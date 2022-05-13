<?php

namespace App\Controller;

use App\Entity\Question;
use App\Service\CategoryService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class CategoryController extends AbstractController
{
    public function __construct(private CategoryService $categoryService)
    {
    }

    #[Route('/category/all', name: 'app_all_categories')]
    public function getAllCategories(): JsonResponse
    {
        $categories = array_map(static fn ($category) => $category->toArray(), $this->categoryService->getAllCategories());

        return new JsonResponse($categories);
    }

    #[Route('/category/{id}', name: 'app_one_category')]
    public function getQuestionsByCategory(int $id): JsonResponse
    {
        print_r($id);
        $category = $this->categoryService->findCategoryById($id);
        print_r($category);
        $questions = $this->categoryService->getAllQuestionsByCategory($category);
        $questions = array_map(static fn (Question $question) => $question->toArrayWithoutAnswers(), $questions);
        print_r($questions);
        return new JsonResponse($questions);
    }
}
