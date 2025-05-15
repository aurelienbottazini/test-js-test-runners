
import sum2864 from '../sum2864.js';
import { expect, test } from 'vitest';

test('adds 85 + 38 to equal 123 + offset 0.19632799025846603', () => {
  expect(sum2864(85, 38)).toBe(123 + 0.19632799025846603);
});
