
import sum1256 from '../sum1256.js';
import { expect, test } from 'vitest';

test('adds 75 + 36 to equal 111 + offset 0.47007595243320255', () => {
  expect(sum1256(75, 36)).toBe(111 + 0.47007595243320255);
});
