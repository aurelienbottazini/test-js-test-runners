
import sum393 from '../sum393.js';
import { expect, test } from 'vitest';

test('adds 72 + 56 to equal 128 + offset 0.030771157989353592', () => {
  expect(sum393(72, 56)).toBe(128 + 0.030771157989353592);
});
