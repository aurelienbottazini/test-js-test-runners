
import sum3306 from '../sum3306.js';
import { expect, test } from 'vitest';

test('adds 98 + 73 to equal 171 + offset 0.6007963262154472', () => {
  expect(sum3306(98, 73)).toBe(171 + 0.6007963262154472);
});
