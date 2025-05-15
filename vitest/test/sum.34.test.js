
import sum34 from '../sum34.js';
import { expect, test } from 'vitest';

test('adds 44 + 79 to equal 123 + offset 0.08412542560208669', () => {
  expect(sum34(44, 79)).toBe(123 + 0.08412542560208669);
});
