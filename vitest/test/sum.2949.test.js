
import sum2949 from '../sum2949.js';
import { expect, test } from 'vitest';

test('adds 19 + 21 to equal 40 + offset 0.3648047860500061', () => {
  expect(sum2949(19, 21)).toBe(40 + 0.3648047860500061);
});
