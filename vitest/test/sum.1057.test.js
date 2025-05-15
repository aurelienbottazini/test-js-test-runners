
import sum1057 from '../sum1057.js';
import { expect, test } from 'vitest';

test('adds 12 + 26 to equal 38 + offset 0.6912689004626585', () => {
  expect(sum1057(12, 26)).toBe(38 + 0.6912689004626585);
});
