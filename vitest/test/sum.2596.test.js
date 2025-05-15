
import sum2596 from '../sum2596.js';
import { expect, test } from 'vitest';

test('adds 65 + 31 to equal 96 + offset 0.5845588907353567', () => {
  expect(sum2596(65, 31)).toBe(96 + 0.5845588907353567);
});
