<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Service\ValidatorService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints;

class UserController extends AbstractController
{
    public function __construct(
        private ValidatorService $validatorService,
    )
    {
    }

    #[Route('/user/authenticate', name: 'api.user.authenticate')]
    public function authenticate(Request $request): Response
    {
        $data = $request->request->all();


    }

    #[Route('/user/create', name: 'api.user.create')]
    public function create(Request $request): Response
    {
        $data = $request->request->all();

        $this->validatorService->validate($data, $this->getRegisterConstraints());

        $user = $this->userRepository->findOneBy([
            'email' => $data['email']
        ]);

        if ($user !== null) {
            throw new \RuntimeException('E-Mail Adresse ist bereit vergeben.', 400);
        }

        $user = new User();
        $user->setFirstname($data['firstname']);
        $user->setLastname($data['lastname']);
        $user->setEmail($data['email']);
        $user->setPassword(password_hash($data['password'], PASSWORD_DEFAULT));
        $user->setPoints(0);

        return new JsonResponse();
    }

    private function getRegisterConstraints(): Constraints\Collection
    {
        return new Constraints\Collection([
            'firstname' => [new Constraints\NotBlank()],
            'lastname' => [new Constraints\NotBlank()],
            'email' => [
                new Constraints\NotBlank(),
                new Constraints\Email(),
            ],
            'password' => [new Constraints\NotBlank()],
        ]);
    }

    private function getAuthenticationConstraints(): Constraints\Collection
    {
        return new Constraints\Collection([
            'email' => [
                new Constraints\NotBlank(),
                new Constraints\Email(),
            ],
            'password' => [new Constraints\NotBlank()],
        ]);
    }
}
