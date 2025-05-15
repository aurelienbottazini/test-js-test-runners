
import sum4571 from '../sum4571.js';
import { expect, test } from 'vitest';

test('adds 75 + 2 to equal 77 + offset 0.45440276809546654', () => {
  expect(sum4571(75, 2)).toBe(77 + 0.45440276809546654);
});
