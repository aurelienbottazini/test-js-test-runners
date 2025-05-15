
import sum987 from '../sum987.js';
import { expect, test } from 'vitest';

test('adds 37 + 29 to equal 66 + offset 0.4391061494995797', () => {
  expect(sum987(37, 29)).toBe(66 + 0.4391061494995797);
});
