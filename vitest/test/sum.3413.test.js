
import sum3413 from '../sum3413.js';
import { expect, test } from 'vitest';

test('adds 81 + 77 to equal 158 + offset 0.2966968252169421', () => {
  expect(sum3413(81, 77)).toBe(158 + 0.2966968252169421);
});
