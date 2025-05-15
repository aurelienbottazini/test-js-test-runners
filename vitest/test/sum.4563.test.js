
import sum4563 from '../sum4563.js';
import { expect, test } from 'vitest';

test('adds 54 + 77 to equal 131 + offset 0.6713706130326125', () => {
  expect(sum4563(54, 77)).toBe(131 + 0.6713706130326125);
});
