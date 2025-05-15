
import sum610 from '../sum610.js';
import { expect, test } from 'vitest';

test('adds 98 + 6 to equal 104 + offset 0.22130563174743978', () => {
  expect(sum610(98, 6)).toBe(104 + 0.22130563174743978);
});
