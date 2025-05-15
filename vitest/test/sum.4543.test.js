
import sum4543 from '../sum4543.js';
import { expect, test } from 'vitest';

test('adds 11 + 30 to equal 41 + offset 0.7783815367658645', () => {
  expect(sum4543(11, 30)).toBe(41 + 0.7783815367658645);
});
