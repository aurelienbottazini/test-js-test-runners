
import sum2329 from '../sum2329.js';
import { expect, test } from 'vitest';

test('adds 63 + 24 to equal 87 + offset 0.03679592475122906', () => {
  expect(sum2329(63, 24)).toBe(87 + 0.03679592475122906);
});
