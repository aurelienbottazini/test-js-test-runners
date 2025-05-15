
import sum4897 from '../sum4897.js';
import { expect, test } from 'vitest';

test('adds 64 + 63 to equal 127 + offset 0.18156840305570765', () => {
  expect(sum4897(64, 63)).toBe(127 + 0.18156840305570765);
});
