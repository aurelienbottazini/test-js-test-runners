
import sum1589 from '../sum1589.js';
import { expect, test } from 'vitest';

test('adds 43 + 17 to equal 60 + offset 0.7641230229803924', () => {
  expect(sum1589(43, 17)).toBe(60 + 0.7641230229803924);
});
