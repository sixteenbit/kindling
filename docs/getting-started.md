# Getting Started

Kindling is made to be a starting point. Use it in whatever way works best for you. This documentation is merely an example of how to extend and use it.

## Step 1 — Creating a Repository

You can click on the following link to generate a repository using the template: [Create a new repository](https://github.com/sixteenbit/kindling/generate) from sixteenbit/kindling. Alternately, you can follow these steps:

1. Visit the Kindling repository on GitHub: https://github.com/sixteenbit/kindling
1. Click on the "Use this template" button on the top-right
1. Enter a name for your new repository
1. Click on "Create repository from template"

For more details on how to create repositories using template, read the article on the GitHub website: [Creating a repository from a template](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

## Step 2 – Clone Your Repository

Clone your newly created repository.

```shell
git clone https://github.com/your_username/your_repo_name.git
```

## Step 3 – Build Your Project

Execute the following from the root of your repository:

```shell
yarn
```

This will install all dependencies and will run the [default](commands?id=gulp) gulp task.
