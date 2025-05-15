
import sum1468 from '../sum1468.js';
import { expect, test } from 'vitest';

test('adds 24 + 97 to equal 121 + offset 0.8073202420723193', () => {
  expect(sum1468(24, 97)).toBe(121 + 0.8073202420723193);
});
