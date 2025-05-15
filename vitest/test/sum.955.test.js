
import sum955 from '../sum955.js';
import { expect, test } from 'vitest';

test('adds 55 + 97 to equal 152 + offset 0.8155540991834458', () => {
  expect(sum955(55, 97)).toBe(152 + 0.8155540991834458);
});
