
import sum2161 from '../sum2161.js';
import { expect, test } from 'vitest';

test('adds 75 + 59 to equal 134 + offset 0.6059427019218674', () => {
  expect(sum2161(75, 59)).toBe(134 + 0.6059427019218674);
});
