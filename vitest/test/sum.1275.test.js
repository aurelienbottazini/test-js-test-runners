
import sum1275 from '../sum1275.js';
import { expect, test } from 'vitest';

test('adds 97 + 36 to equal 133 + offset 0.127067152086083', () => {
  expect(sum1275(97, 36)).toBe(133 + 0.127067152086083);
});
