<?php declare(strict_types=1);

namespace App\Service;

use App\Entity\User;
use App\Repository\UserRepository;

class UserService
{
    public function __construct(
        private UserRepository $userRepository
    )
    {
    }

    public function create(array $data): void
    {
        $user = new User();
        $user->setFirstname($data['firstname']);
        $user->setLastname($data['lastname']);
        $user->setEmail($data['email']);
        $user->setPassword(password_hash($data['password'], PASSWORD_DEFAULT));
        $user->setPoints(0);

        $user = $this->userRepository->findOneBy([
            'email' => $data['email']
        ]);

        $this->userRepository->add($user);
    }
}