
import sum1555 from '../sum1555.js';
import { expect, test } from 'vitest';

test('adds 91 + 8 to equal 99 + offset 0.271658268410752', () => {
  expect(sum1555(91, 8)).toBe(99 + 0.271658268410752);
});
