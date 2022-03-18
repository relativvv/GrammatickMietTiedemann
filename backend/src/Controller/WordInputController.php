<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class WordInputController extends AbstractController
{
    #[Route('/word/input/{id}/{word}', name: 'app_word_input')]
    public function ProofWord($id, $word): Response
    {

        // Get correct word from DB.
        $correctWord = 'Auto';

        return $this->json(['isWordCorrect' => $correctWord === $word]);

        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/WordInputController.php',
        ]);
    }
}
