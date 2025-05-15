
import sum2732 from '../sum2732.js';
import { expect, test } from 'vitest';

test('adds 9 + 39 to equal 48 + offset 0.6697250410406174', () => {
  expect(sum2732(9, 39)).toBe(48 + 0.6697250410406174);
});
