import User from '../services/user';
import requestretry from 'requestretry';
jest.mock('requestretry');



describe('Creating new user', () => {
  // Applies only to tests in this describe block

  test('Positive: create user with given credentials', () => {
    const resp = {
      body: {
        "realm": "string",
        "username": "a1",
        "email": "a@b.c",
        "emailVerified": false,
        "id": "5ca7234a2bcb112ea0d771d4"
      },
      statusCode: 200
    };
    requestretry.post.mockResolvedValue(resp);
    const credentials = {
      username: "testUser",
      password: "testUser",
      email: "testUser@gmail.com",
      confirmPassword: "testUser",
      redirectToLoginRoute: false
    }
    return User.createUser(credentials).then(data => {
      expect(data.message).toBe('User created successfully.');
    });
  });

  test('Negative: User already exists ', () => {
    const resp = {
            "error": {
              "statusCode": 422,
              "name": "ValidationError",
              "message": "The `User` instance is not valid. Details: `username` User already exists (value: \"a1\"); `email` Email already exists (value: \"a@b.c\").",
            },
      statusCode: 422
    };
    requestretry.post.mockResolvedValue(resp);
    const credentials = {
      username: "testUser",
      password: "testUser",
      email: "testUser@gmail.com",
      confirmPassword: "testUser",
      redirectToLoginRoute: false
    }
    return User.createUser(credentials).catch(err => {
      expect(err.message).toBe('Duplicate User details. Please provide correct details.');
    });
  });

  test('Negative: Server Errro ', () => {
    const resp = {
            "error": {
              "statusCode": 500,
              "name": "ServerError",
              "message": "Internal Server Error",
            },
      statusCode: 500
    };
    requestretry.post.mockResolvedValue(resp);
    const credentials = {
      username: "testUser",
      password: "testUser",
      email: "testUser@gmail.com",
      confirmPassword: "testUser",
      redirectToLoginRoute: false
    }
    return User.createUser(credentials).catch(err => {
      expect(err.message).toBe('Failed: Unable to create user.');
    });
  });

  test('Negative: Server Errro ', () => {
    const resp = {
            "error": {
              "statusCode": 500,
              "name": "ServerError",
              "message": "Internal Server Error",
            },
      statusCode: 500
    };
    requestretry.post.mockImplementation((req)=>{
        return Promise.reject(resp);
    });
    const credentials = {
      username: "testUser",
      password: "testUser",
      email: "testUser@gmail.com",
      confirmPassword: "testUser",
      redirectToLoginRoute: false
    }
    return User.createUser(credentials).catch(err => {
      expect(err.message).toBe('Internal Server Error');
    });
  });

});
