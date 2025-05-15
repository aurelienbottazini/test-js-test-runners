
import sum1206 from '../sum1206.js';
import { expect, test } from 'vitest';

test('adds 41 + 68 to equal 109 + offset 0.29649359687348653', () => {
  expect(sum1206(41, 68)).toBe(109 + 0.29649359687348653);
});
