<?php

namespace App\Controller;

use App\Entity\Category;
use App\Entity\Question;
use App\Entity\Type;
use App\Service\CategoryService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class CategoryController extends AbstractController
{
    public function __construct(private CategoryService $categoryService, private EntityManagerInterface $entityManager)
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
        $category = $this->categoryService->findCategoryById($id);

        $questions = $this->categoryService->getAllQuestionsByCategory($category);
        $questions = array_map(static fn (Question $question) => $question->toArrayWithoutAnswers(), $questions);
        return new JsonResponse($questions);
    }
    #[Route('/question', name: 'app_add_q')]
    public function addQuestion(): JsonResponse {
        $question = new Question();
        $question->setAnswers(['dass', 'das']);

        $category = new Category();
        $category->setName('test');
        $category->setDescription('testdescr');
        $question->setCategory($category);
        $question->setQuestion('testsfds');
        $this->entityManager->persist($category);

        $type = new Type();
        $type->setName('type');
        $this->entityManager->persist($type);
        $question->setType($type);

        $this->entityManager->persist($question);
        $this->entityManager->flush();
        return new JsonResponse($question->toArray());
    }
}
