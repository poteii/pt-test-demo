import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('shold raise voteChanged event when vote', () => {
    let totalVote = null;
    component.voteChanged.subscribe(tv => (totalVote = tv));

    component.upVote();

    expect(totalVote).not.toBeNull();
  });
});
