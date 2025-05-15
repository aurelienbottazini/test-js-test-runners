
import sum1024 from '../sum1024.js';
import { expect, test } from 'vitest';

test('adds 98 + 2 to equal 100 + offset 0.3283357218109493', () => {
  expect(sum1024(98, 2)).toBe(100 + 0.3283357218109493);
});
