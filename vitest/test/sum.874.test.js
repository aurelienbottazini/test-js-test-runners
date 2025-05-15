
import sum874 from '../sum874.js';
import { expect, test } from 'vitest';

test('adds 90 + 59 to equal 149 + offset 0.40518547264393934', () => {
  expect(sum874(90, 59)).toBe(149 + 0.40518547264393934);
});
