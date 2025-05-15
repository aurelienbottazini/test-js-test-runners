
import sum1070 from '../sum1070.js';
import { expect, test } from 'vitest';

test('adds 56 + 71 to equal 127 + offset 0.33471470422135996', () => {
  expect(sum1070(56, 71)).toBe(127 + 0.33471470422135996);
});
