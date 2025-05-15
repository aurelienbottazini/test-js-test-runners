
import sum3761 from '../sum3761.js';
import { expect, test } from 'vitest';

test('adds 54 + 13 to equal 67 + offset 0.7552345295095018', () => {
  expect(sum3761(54, 13)).toBe(67 + 0.7552345295095018);
});
