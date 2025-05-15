
import sum2581 from '../sum2581.js';
import { expect, test } from 'vitest';

test('adds 68 + 22 to equal 90 + offset 0.2531243368487395', () => {
  expect(sum2581(68, 22)).toBe(90 + 0.2531243368487395);
});
