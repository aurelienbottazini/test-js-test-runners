
import sum4118 from '../sum4118.js';
import { expect, test } from 'vitest';

test('adds 55 + 49 to equal 104 + offset 0.648681083766605', () => {
  expect(sum4118(55, 49)).toBe(104 + 0.648681083766605);
});
