
import sum92 from '../sum92.js';
import { expect, test } from 'vitest';

test('adds 75 + 28 to equal 103 + offset 0.8473042624502218', () => {
  expect(sum92(75, 28)).toBe(103 + 0.8473042624502218);
});
