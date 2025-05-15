
import sum1995 from '../sum1995.js';
import { expect, test } from 'vitest';

test('adds 91 + 22 to equal 113 + offset 0.2509532661699432', () => {
  expect(sum1995(91, 22)).toBe(113 + 0.2509532661699432);
});
