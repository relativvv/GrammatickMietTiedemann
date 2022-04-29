<?php

namespace App\Controller;

use App\Service\QuestionService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class QuestionController extends AbstractController
{
    public function __construct(private QuestionService $questionService)
    {
    }

    #[Route('/question/{id}', name: 'app_word_select')]
    public function getQuestion(int $id): JsonResponse
    {
        $question = $this->questionService->findQuestionById($id);
        return new JsonResponse($question->toArray());
    }
}
