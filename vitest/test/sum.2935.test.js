
import sum2935 from '../sum2935.js';
import { expect, test } from 'vitest';

test('adds 53 + 73 to equal 126 + offset 0.5524104505539399', () => {
  expect(sum2935(53, 73)).toBe(126 + 0.5524104505539399);
});
