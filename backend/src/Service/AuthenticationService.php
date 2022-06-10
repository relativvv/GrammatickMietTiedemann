<?php declare(strict_types=1);

namespace App\Service;

use Doctrine\DBAL\Connection;

class AuthenticationService
{
    public function __construct(
        private Connection $connection,
    )
    {
    }

    public function authenticate(string $email, string $password)
    {
        $builder = $this->connection->createQueryBuilder();
        $builder->from('user');
    }
}