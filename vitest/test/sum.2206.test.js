
import sum2206 from '../sum2206.js';
import { expect, test } from 'vitest';

test('adds 2 + 71 to equal 73 + offset 0.945729768673446', () => {
  expect(sum2206(2, 71)).toBe(73 + 0.945729768673446);
});
