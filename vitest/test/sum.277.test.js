
import sum277 from '../sum277.js';
import { expect, test } from 'vitest';

test('adds 51 + 47 to equal 98 + offset 0.01058149262473107', () => {
  expect(sum277(51, 47)).toBe(98 + 0.01058149262473107);
});
