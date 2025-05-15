
import sum2829 from '../sum2829.js';
import { expect, test } from 'vitest';

test('adds 4 + 76 to equal 80 + offset 0.33541172277115006', () => {
  expect(sum2829(4, 76)).toBe(80 + 0.33541172277115006);
});
