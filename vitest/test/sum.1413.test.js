
import sum1413 from '../sum1413.js';
import { expect, test } from 'vitest';

test('adds 13 + 98 to equal 111 + offset 0.935054921586805', () => {
  expect(sum1413(13, 98)).toBe(111 + 0.935054921586805);
});
