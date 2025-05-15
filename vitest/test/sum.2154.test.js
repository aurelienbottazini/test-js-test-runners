
import sum2154 from '../sum2154.js';
import { expect, test } from 'vitest';

test('adds 8 + 52 to equal 60 + offset 0.32474288406193597', () => {
  expect(sum2154(8, 52)).toBe(60 + 0.32474288406193597);
});
