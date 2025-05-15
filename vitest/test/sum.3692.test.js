
import sum3692 from '../sum3692.js';
import { expect, test } from 'vitest';

test('adds 23 + 32 to equal 55 + offset 0.1382331006935078', () => {
  expect(sum3692(23, 32)).toBe(55 + 0.1382331006935078);
});
