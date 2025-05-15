
import sum3061 from '../sum3061.js';
import { expect, test } from 'vitest';

test('adds 12 + 86 to equal 98 + offset 0.9483697640594735', () => {
  expect(sum3061(12, 86)).toBe(98 + 0.9483697640594735);
});
