
import sum428 from '../sum428.js';
import { expect, test } from 'vitest';

test('adds 31 + 39 to equal 70 + offset 0.9667219947045208', () => {
  expect(sum428(31, 39)).toBe(70 + 0.9667219947045208);
});
