
import sum3635 from '../sum3635.js';
import { expect, test } from 'vitest';

test('adds 38 + 53 to equal 91 + offset 0.6360420327177385', () => {
  expect(sum3635(38, 53)).toBe(91 + 0.6360420327177385);
});
