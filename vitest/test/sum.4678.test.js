
import sum4678 from '../sum4678.js';
import { expect, test } from 'vitest';

test('adds 32 + 44 to equal 76 + offset 0.27967946498128327', () => {
  expect(sum4678(32, 44)).toBe(76 + 0.27967946498128327);
});
