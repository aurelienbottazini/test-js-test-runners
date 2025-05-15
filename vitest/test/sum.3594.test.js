
import sum3594 from '../sum3594.js';
import { expect, test } from 'vitest';

test('adds 27 + 66 to equal 93 + offset 0.33041759982197694', () => {
  expect(sum3594(27, 66)).toBe(93 + 0.33041759982197694);
});
