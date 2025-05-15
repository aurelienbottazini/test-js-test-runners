
import sum1353 from '../sum1353.js';
import { expect, test } from 'vitest';

test('adds 56 + 35 to equal 91 + offset 0.8164399984262037', () => {
  expect(sum1353(56, 35)).toBe(91 + 0.8164399984262037);
});
