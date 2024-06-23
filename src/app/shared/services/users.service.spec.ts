import { TestBed } from "@angular/core/testing";
import { UsersService } from "./users.service";
import { UserInteface } from "../types/user.interface";
import { UtilsService } from "./utils.service";

describe('Name of the group', () => {
  let usersService: UsersService;
  const utilsServiceMock = {
    pluck: jest.fn(),
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService,{provide: UtilsService, useValue: utilsServiceMock}]
    })

    usersService = TestBed.inject(UsersService);
  });

  it('creates a service', () => {
    expect(usersService).toBeTruthy();
  });

  describe('addUser', () => {
    it('should add a user', () => {
      const user:UserInteface = {
        id: '3',
        name: 'Jozef'
      }
      usersService.addUser(user)
      expect(usersService.users).toEqual([user]);
    });
  });

  describe('removeUser', () => {
    it('should remove a user', () => {
      const user:UserInteface = {
        id: '3',
        name: 'Jozef'
      }
      usersService.users = [user]
      usersService.removeUser('3')
      expect(usersService.users).toEqual([]);
    });
  });

  describe('getUsernames', () => {
    it('should get usernames', () => {
      utilsServiceMock.pluck.mockReturnValue(['foo']);
      expect(usersService.getUsernames()).toEqual(['foo']);  
    });
  });
});