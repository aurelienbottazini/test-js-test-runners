
import sum3101 from '../sum3101.js';
import { expect, test } from 'vitest';

test('adds 85 + 26 to equal 111 + offset 0.8109546091693781', () => {
  expect(sum3101(85, 26)).toBe(111 + 0.8109546091693781);
});
