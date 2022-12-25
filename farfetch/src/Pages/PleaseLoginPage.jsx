import { Text } from '@chakra-ui/react';
import React from 'react'

const PleaseLoginPage = () => {
  return (
      <div>
          

          <Text fontSize={"5xl"}>Please Login for access this page</Text>
      <div style={{ display: 'block', margin: 'auto', marginTop: '30px' }}>
              <img
                  
          src="https://cdn.dribbble.com/users/1172503/screenshots/4505740/login-form.gif"
          alt=""
        />
      </div>
    </div>
  );
}

export default PleaseLoginPage