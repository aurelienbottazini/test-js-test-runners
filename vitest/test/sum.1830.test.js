
import sum1830 from '../sum1830.js';
import { expect, test } from 'vitest';

test('adds 19 + 12 to equal 31 + offset 0.1848395163594475', () => {
  expect(sum1830(19, 12)).toBe(31 + 0.1848395163594475);
});
