
import sum4601 from '../sum4601.js';
import { expect, test } from 'vitest';

test('adds 33 + 74 to equal 107 + offset 0.8976053062298284', () => {
  expect(sum4601(33, 74)).toBe(107 + 0.8976053062298284);
});
