
import sum1391 from '../sum1391.js';
import { expect, test } from 'vitest';

test('adds 52 + 53 to equal 105 + offset 0.0842534433638199', () => {
  expect(sum1391(52, 53)).toBe(105 + 0.0842534433638199);
});
