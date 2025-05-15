
import sum4098 from '../sum4098.js';
import { expect, test } from 'vitest';

test('adds 87 + 92 to equal 179 + offset 0.3016781207707766', () => {
  expect(sum4098(87, 92)).toBe(179 + 0.3016781207707766);
});
