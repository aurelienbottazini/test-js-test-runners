
import sum628 from '../sum628.js';
import { expect, test } from 'vitest';

test('adds 10 + 21 to equal 31 + offset 0.5968840966284262', () => {
  expect(sum628(10, 21)).toBe(31 + 0.5968840966284262);
});
