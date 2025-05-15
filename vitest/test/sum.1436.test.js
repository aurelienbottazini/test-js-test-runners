
import sum1436 from '../sum1436.js';
import { expect, test } from 'vitest';

test('adds 26 + 25 to equal 51 + offset 0.9483220507345272', () => {
  expect(sum1436(26, 25)).toBe(51 + 0.9483220507345272);
});
