
import sum2890 from '../sum2890.js';
import { expect, test } from 'vitest';

test('adds 83 + 61 to equal 144 + offset 0.2547636074844982', () => {
  expect(sum2890(83, 61)).toBe(144 + 0.2547636074844982);
});
