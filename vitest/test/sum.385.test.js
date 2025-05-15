
import sum385 from '../sum385.js';
import { expect, test } from 'vitest';

test('adds 1 + 48 to equal 49 + offset 0.8946060660138565', () => {
  expect(sum385(1, 48)).toBe(49 + 0.8946060660138565);
});
