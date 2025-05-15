
import sum1890 from '../sum1890.js';
import { expect, test } from 'vitest';

test('adds 38 + 27 to equal 65 + offset 0.06418411010672986', () => {
  expect(sum1890(38, 27)).toBe(65 + 0.06418411010672986);
});
