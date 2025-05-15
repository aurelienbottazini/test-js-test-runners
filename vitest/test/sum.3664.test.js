
import sum3664 from '../sum3664.js';
import { expect, test } from 'vitest';

test('adds 50 + 85 to equal 135 + offset 0.02771644128212636', () => {
  expect(sum3664(50, 85)).toBe(135 + 0.02771644128212636);
});
