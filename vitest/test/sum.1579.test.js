
import sum1579 from '../sum1579.js';
import { expect, test } from 'vitest';

test('adds 90 + 94 to equal 184 + offset 0.6492443964525445', () => {
  expect(sum1579(90, 94)).toBe(184 + 0.6492443964525445);
});
