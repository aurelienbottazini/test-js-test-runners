
import sum1676 from '../sum1676.js';
import { expect, test } from 'vitest';

test('adds 28 + 51 to equal 79 + offset 0.3496744135789869', () => {
  expect(sum1676(28, 51)).toBe(79 + 0.3496744135789869);
});
