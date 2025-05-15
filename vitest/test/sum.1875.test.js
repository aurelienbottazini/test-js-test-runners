
import sum1875 from '../sum1875.js';
import { expect, test } from 'vitest';

test('adds 69 + 82 to equal 151 + offset 0.3719801001672802', () => {
  expect(sum1875(69, 82)).toBe(151 + 0.3719801001672802);
});
