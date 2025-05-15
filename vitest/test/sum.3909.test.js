
import sum3909 from '../sum3909.js';
import { expect, test } from 'vitest';

test('adds 48 + 51 to equal 99 + offset 0.6403912734327177', () => {
  expect(sum3909(48, 51)).toBe(99 + 0.6403912734327177);
});
