import { expect } from 'chai';
import { isAnagram } from './anagrams.js';

describe('isAnagram - basic functionality', () => {
  it('returns false when no strings are passed', () => {
    const expected = false;
    const actual = isAnagram();
    expect(actual).to.equal(expected);
  });

  it('returns false when empty strings are passed', () => {
    const expected = false;
    const actual = isAnagram('', '');
    expect(actual).to.equal(expected);
  });

  it('returns false when strings of two different lengths are passed', () => {
    const expected = false;
    const actual = isAnagram('the', 'then');
    expect(actual).to.equal(expected);
  });

  it('returns false when strings of the same length but different letter compositions are passed', () => {
    const expected = false;
    const actual = isAnagram('cat', 'hat');
    expect(actual).to.equal(expected);
  });

  it('returns true when strings of the same length and letter composition are passed', () => {
    const expected = true;
    const actual = isAnagram('state', 'taste');
    expect(actual).to.equal(expected);
  });

  it('returns true when strings of the same length and letter composition are passed, even when the letter casings vary', () => {
    const expected = true;
    const actual = isAnagram('state', 'TASTE');
    expect(actual).to.equal(expected);
  });

  it('returns true when strings of the same length and letter composition are passed, even if there are spaces in one but not the other', () => {
    const expected = true;
    const actual = isAnagram('conversation', 'voices rant on');
    expect(actual).to.equal(expected);
  });

  it('returns true when strings of the same length and letter composition are passed, even if there are non-alphanumeric characters in one but not the other', () => {
    const expected = true;
    const actual = isAnagram('!@#$%^&*()-=_+[]{} ;:`~\'",./?<>listen', 'silent');
    expect(actual).to.equal(expected);
  });
})