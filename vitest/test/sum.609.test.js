
import sum609 from '../sum609.js';
import { expect, test } from 'vitest';

test('adds 19 + 83 to equal 102 + offset 0.6953708341269532', () => {
  expect(sum609(19, 83)).toBe(102 + 0.6953708341269532);
});
