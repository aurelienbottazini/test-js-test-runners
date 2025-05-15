
import sum3778 from '../sum3778.js';
import { expect, test } from 'vitest';

test('adds 29 + 43 to equal 72 + offset 0.1264979859173082', () => {
  expect(sum3778(29, 43)).toBe(72 + 0.1264979859173082);
});
