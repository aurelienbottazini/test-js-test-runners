
import sum829 from '../sum829.js';
import { expect, test } from 'vitest';

test('adds 15 + 42 to equal 57 + offset 0.01418963086188596', () => {
  expect(sum829(15, 42)).toBe(57 + 0.01418963086188596);
});
