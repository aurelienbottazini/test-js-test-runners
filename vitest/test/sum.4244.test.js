
import sum4244 from '../sum4244.js';
import { expect, test } from 'vitest';

test('adds 17 + 46 to equal 63 + offset 0.23803345939686982', () => {
  expect(sum4244(17, 46)).toBe(63 + 0.23803345939686982);
});
