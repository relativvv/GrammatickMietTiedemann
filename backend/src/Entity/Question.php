<?php

namespace App\Entity;

use App\Repository\QuestionRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestionRepository::class)]
class Question
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $question;

    #[ORM\Column(type: 'array')]
    private $answers = [];

    #[ORM\ManyToOne(targetEntity: Category::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $category;

    #[ORM\ManyToOne(targetEntity: Type::class, inversedBy: 'questions')]
    #[ORM\JoinColumn(nullable: false)]
    private $type;

    public function toArray(): array
    {
        return [
            'id' => $this->getId(),
            'question' => $this->getQuestion(),
            'answers' => $this->getAnswers(),
            'type' => $this->getType()->toArray(),
            'category' => $this->getCategory()->toArray()
        ];
    }

    public function toArrayWithoutAnswers(): array
    {
        return [
            'id' => $this->getId(),
            'question' => $this->getQuestion(),
            'type' => $this->getType()->toArray(),
            'category' => $this->getCategory()->toArray()
        ];
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuestion(): ?string
    {
        return $this->question;
    }

    public function setQuestion(string $question): self
    {
        $this->question = $question;

        return $this;
    }

    public function getAnswers(): ?array
    {
        return $this->answers;
    }

    public function addAnswer(string $answer): self
    {
        $this->answers[] = $answer;

        return $this;
    }

    public function setAnswers(array $answers): self
    {
        $this->answers = $answers;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getType(): ?Type
    {
        return $this->type;
    }

    public function setType(?Type $type): self
    {
        $this->type = $type;

        return $this;
    }
}
