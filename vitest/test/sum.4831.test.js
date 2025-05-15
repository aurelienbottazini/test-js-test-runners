
import sum4831 from '../sum4831.js';
import { expect, test } from 'vitest';

test('adds 17 + 34 to equal 51 + offset 0.10420244167864534', () => {
  expect(sum4831(17, 34)).toBe(51 + 0.10420244167864534);
});
