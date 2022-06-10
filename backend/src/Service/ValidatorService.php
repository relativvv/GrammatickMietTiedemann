<?php declare(strict_types=1);

namespace App\Service;

use Symfony\Component\Validator\Constraints\Collection;
use Symfony\Component\Validator\ConstraintViolation;
use Symfony\Component\Validator\ConstraintViolationListInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ValidatorService
{
    public function __construct(private ValidatorInterface $validator)
    {
    }

    public function validate(array $data, Collection $collection): void
    {
        $violations = $this->validator->validate($data, $collection);

        if ($violations->count() <= 0) {
            return;
        }

        throw new \RuntimeException($this->buildExceptionMessage($violations), 400);
    }

    private function buildExceptionMessage(ConstraintViolationListInterface $violationList): string
    {
        $message = '';

        /** @var ConstraintViolation $violation */
        foreach ($violationList as $violation) {
            $message .= $violation->getPropertyPath() . ': ' . $violation->getMessage() . \PHP_EOL;
        }

        return $message;
    }
}