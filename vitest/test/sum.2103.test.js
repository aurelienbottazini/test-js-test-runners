
import sum2103 from '../sum2103.js';
import { expect, test } from 'vitest';

test('adds 51 + 91 to equal 142 + offset 0.08539920818041025', () => {
  expect(sum2103(51, 91)).toBe(142 + 0.08539920818041025);
});
