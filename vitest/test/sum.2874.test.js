
import sum2874 from '../sum2874.js';
import { expect, test } from 'vitest';

test('adds 61 + 14 to equal 75 + offset 0.3954542715998618', () => {
  expect(sum2874(61, 14)).toBe(75 + 0.3954542715998618);
});
