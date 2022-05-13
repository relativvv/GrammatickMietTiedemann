<?php

namespace App\Service;

use App\Entity\Category;
use App\Entity\Question;
use App\Repository\CategoryRepository;
use App\Repository\QuestionRepository;

class QuestionService
{
    public function __construct(private QuestionRepository $questionRepository)
    {
    }

    public function findQuestionById(int $id): Question
    {
        return $this->questionRepository->findQuestionByid($id);
    }
}
