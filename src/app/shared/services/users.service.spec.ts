import { TestBed } from "@angular/core/testing";
import { UsersService } from "./users.service";
import { UserInteface } from "../types/user.interface";

describe('Name of the group', () => {
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
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
      expect(usersService.users$.getValue()).toEqual([user]);
    });
  });

  describe('removeUser', () => {
    it('should remove a user', () => {
      const user:UserInteface = {
        id: '3',
        name: 'Jozef'
      }
      usersService.users$.next([user])
      usersService.removeUser('3')
      expect(usersService.users$.getValue()).toEqual([]);
    });
  });
});