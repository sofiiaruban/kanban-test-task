import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Field, HStack, Input } from '@chakra-ui/react'
import { githubRepoPattern, validationMessages } from '@/lib/data'
import { ButtonType, InputType } from '@/types/types'

interface FormValues {
  githubRepo: string
}

interface GitHubRepoFormProps {
  placeholder: string
  buttonText: string
  onSubmit: (data: FormValues) => void
  inputType?: InputType
  buttonType?: ButtonType
}

const GitHubRepoForm: FC<GitHubRepoFormProps> = ({
  placeholder,
  buttonText,
  onSubmit,
  inputType = InputType.URL,
  buttonType = ButtonType.Submit
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>()

  const handleFormSubmit = handleSubmit((data) => {
    onSubmit(data) 
  })

  return (
    <form onSubmit={handleFormSubmit}>
      <HStack>
        <Field.Root invalid={!!errors.githubRepo}>
          <Input
            type={inputType}
            placeholder={placeholder}
            {...register('githubRepo', {
              required: validationMessages.required,
              pattern: {
                value: githubRepoPattern,
                message: validationMessages.pattern
              }
            })}
          />
          <Field.ErrorText>{errors.githubRepo?.message}</Field.ErrorText>
        </Field.Root>
        <Button type={buttonType}>{buttonText}</Button>
      </HStack>
    </form>
  )
}

export default GitHubRepoForm
