
import sum362 from '../sum362.js';
import { expect, test } from 'vitest';

test('adds 40 + 31 to equal 71 + offset 0.4392775630402824', () => {
  expect(sum362(40, 31)).toBe(71 + 0.4392775630402824);
});
