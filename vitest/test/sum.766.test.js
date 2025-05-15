
import sum766 from '../sum766.js';
import { expect, test } from 'vitest';

test('adds 44 + 57 to equal 101 + offset 0.32792028121496974', () => {
  expect(sum766(44, 57)).toBe(101 + 0.32792028121496974);
});
