
import sum3085 from '../sum3085.js';
import { expect, test } from 'vitest';

test('adds 62 + 32 to equal 94 + offset 0.35880102967152494', () => {
  expect(sum3085(62, 32)).toBe(94 + 0.35880102967152494);
});
