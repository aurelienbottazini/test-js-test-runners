
import sum1103 from '../sum1103.js';
import { expect, test } from 'vitest';

test('adds 29 + 13 to equal 42 + offset 0.6268344881173955', () => {
  expect(sum1103(29, 13)).toBe(42 + 0.6268344881173955);
});
