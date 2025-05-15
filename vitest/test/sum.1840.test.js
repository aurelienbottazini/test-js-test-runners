
import sum1840 from '../sum1840.js';
import { expect, test } from 'vitest';

test('adds 42 + 25 to equal 67 + offset 0.01640846220982417', () => {
  expect(sum1840(42, 25)).toBe(67 + 0.01640846220982417);
});
