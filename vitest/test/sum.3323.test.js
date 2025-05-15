
import sum3323 from '../sum3323.js';
import { expect, test } from 'vitest';

test('adds 38 + 51 to equal 89 + offset 0.1737580060301196', () => {
  expect(sum3323(38, 51)).toBe(89 + 0.1737580060301196);
});
