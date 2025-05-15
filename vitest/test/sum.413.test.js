
import sum413 from '../sum413.js';
import { expect, test } from 'vitest';

test('adds 58 + 77 to equal 135 + offset 0.7143270846500258', () => {
  expect(sum413(58, 77)).toBe(135 + 0.7143270846500258);
});
