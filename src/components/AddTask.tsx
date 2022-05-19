import { Button, HStack, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

function AddTask() {
  const [content, setContent] = useState('');

  return (
    <form>
      <HStack>
        <Input
          placeholder="Fazer um café"
          variant="filled"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit">Adicionar</Button>
      </HStack>
    </form>
  );
}

export default AddTask;
