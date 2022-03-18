<?php

namespace App\Entity;

use App\Repository\WordsInputRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: WordsInputRepository::class)]
class WordsInput
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $Word;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getWord(): ?string
    {
        return $this->Word;
    }

    public function setWord(string $Word): self
    {
        $this->Word = $Word;

        return $this;
    }
}
