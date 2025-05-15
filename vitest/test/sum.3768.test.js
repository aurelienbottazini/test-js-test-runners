
import sum3768 from '../sum3768.js';
import { expect, test } from 'vitest';

test('adds 29 + 55 to equal 84 + offset 0.37501521707672214', () => {
  expect(sum3768(29, 55)).toBe(84 + 0.37501521707672214);
});
