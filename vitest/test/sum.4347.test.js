
import sum4347 from '../sum4347.js';
import { expect, test } from 'vitest';

test('adds 34 + 4 to equal 38 + offset 0.430477528134818', () => {
  expect(sum4347(34, 4)).toBe(38 + 0.430477528134818);
});
