
import sum1753 from '../sum1753.js';
import { expect, test } from 'vitest';

test('adds 69 + 13 to equal 82 + offset 0.6200563964015359', () => {
  expect(sum1753(69, 13)).toBe(82 + 0.6200563964015359);
});
