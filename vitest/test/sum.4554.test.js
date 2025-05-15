
import sum4554 from '../sum4554.js';
import { expect, test } from 'vitest';

test('adds 91 + 92 to equal 183 + offset 0.9101210753214073', () => {
  expect(sum4554(91, 92)).toBe(183 + 0.9101210753214073);
});
