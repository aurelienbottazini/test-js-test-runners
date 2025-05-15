
import sum3142 from '../sum3142.js';
import { expect, test } from 'vitest';

test('adds 91 + 90 to equal 181 + offset 0.852847913655024', () => {
  expect(sum3142(91, 90)).toBe(181 + 0.852847913655024);
});
