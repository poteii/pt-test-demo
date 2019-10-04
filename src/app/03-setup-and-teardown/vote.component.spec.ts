import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  //Arrange
  let component: VoteComponent;
  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment totalVotes when vote up', () => {
    //Act
    component.upVote();
    //Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should be -1 when vote down', () => {
    //Act
    component.downVote();
    //Assert
    expect(component.totalVotes).toBe(-1);
  });
});
