
import sum521 from '../sum521.js';
import { expect, test } from 'vitest';

test('adds 53 + 28 to equal 81 + offset 0.8138084490181188', () => {
  expect(sum521(53, 28)).toBe(81 + 0.8138084490181188);
});
