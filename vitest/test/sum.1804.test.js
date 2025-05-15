
import sum1804 from '../sum1804.js';
import { expect, test } from 'vitest';

test('adds 14 + 8 to equal 22 + offset 0.6288835494298581', () => {
  expect(sum1804(14, 8)).toBe(22 + 0.6288835494298581);
});
