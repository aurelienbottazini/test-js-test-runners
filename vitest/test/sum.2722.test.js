
import sum2722 from '../sum2722.js';
import { expect, test } from 'vitest';

test('adds 82 + 83 to equal 165 + offset 0.40425684174694365', () => {
  expect(sum2722(82, 83)).toBe(165 + 0.40425684174694365);
});
