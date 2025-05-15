
import sum370 from '../sum370.js';
import { expect, test } from 'vitest';

test('adds 76 + 14 to equal 90 + offset 0.5900546866235592', () => {
  expect(sum370(76, 14)).toBe(90 + 0.5900546866235592);
});
