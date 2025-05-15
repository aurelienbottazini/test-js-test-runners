
import sum567 from '../sum567.js';
import { expect, test } from 'vitest';

test('adds 3 + 51 to equal 54 + offset 0.7327405442117105', () => {
  expect(sum567(3, 51)).toBe(54 + 0.7327405442117105);
});
