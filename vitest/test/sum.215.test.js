
import sum215 from '../sum215.js';
import { expect, test } from 'vitest';

test('adds 3 + 44 to equal 47 + offset 0.20930782602760445', () => {
  expect(sum215(3, 44)).toBe(47 + 0.20930782602760445);
});
