<?php

namespace App\Controller;

use App\Service\CategoryService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class CategoryController extends AbstractController
{

    public function __construct(private CategoryService $categoryService) {
    }

    #[Route('/category/all', name: 'app_category')]
    public function getAllCategories(): JsonResponse
    {
        $categories = array_map(static fn ($category) => $category->toArray(), $this->categoryService->getAllCategories());

        return new JsonResponse($categories);
    }
}
