import { TestBed } from "@angular/core/testing";
import { UsersService } from "./users.service";
import { UserInteface } from "../types/user.interface";
import { UtilsService } from "./utils.service";

describe('Name of the group', () => {
  let usersService: UsersService;
  let utilsService: UtilsService;
  // const utilsServiceMock = {
  //   pluck: jest.fn(),
  // }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService, UtilsService
        // {provide: UtilsService, useValue: utilsServiceMock}
      ]
    })

    usersService = TestBed.inject(UsersService);
    utilsService = TestBed.inject(UtilsService);
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
      jest.spyOn(utilsService, 'pluck');
      usersService.users = [{id: '3', name: 'Jozef'}];
      usersService.getUsernames();
      expect(utilsService.pluck).toHaveBeenCalledWith(
        usersService.users,
        'name'
      );  

      // utilsServiceMock.pluck.mockReturnValue(['foo']);
      // expect(usersService.getUsernames()).toEqual(['foo']);  
    });
  });
});