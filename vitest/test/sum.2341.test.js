
import sum2341 from '../sum2341.js';
import { expect, test } from 'vitest';

test('adds 80 + 55 to equal 135 + offset 0.4801034003867287', () => {
  expect(sum2341(80, 55)).toBe(135 + 0.4801034003867287);
});
