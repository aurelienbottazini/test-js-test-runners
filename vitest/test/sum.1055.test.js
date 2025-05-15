
import sum1055 from '../sum1055.js';
import { expect, test } from 'vitest';

test('adds 28 + 64 to equal 92 + offset 0.4370358599373664', () => {
  expect(sum1055(28, 64)).toBe(92 + 0.4370358599373664);
});
