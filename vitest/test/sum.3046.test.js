
import sum3046 from '../sum3046.js';
import { expect, test } from 'vitest';

test('adds 83 + 69 to equal 152 + offset 0.4310065553854936', () => {
  expect(sum3046(83, 69)).toBe(152 + 0.4310065553854936);
});
