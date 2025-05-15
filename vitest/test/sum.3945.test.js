
import sum3945 from '../sum3945.js';
import { expect, test } from 'vitest';

test('adds 62 + 47 to equal 109 + offset 0.5189652897342936', () => {
  expect(sum3945(62, 47)).toBe(109 + 0.5189652897342936);
});
