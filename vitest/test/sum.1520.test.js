
import sum1520 from '../sum1520.js';
import { expect, test } from 'vitest';

test('adds 92 + 20 to equal 112 + offset 0.24281738992242774', () => {
  expect(sum1520(92, 20)).toBe(112 + 0.24281738992242774);
});
