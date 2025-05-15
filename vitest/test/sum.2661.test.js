
import sum2661 from '../sum2661.js';
import { expect, test } from 'vitest';

test('adds 89 + 31 to equal 120 + offset 0.9236638879324514', () => {
  expect(sum2661(89, 31)).toBe(120 + 0.9236638879324514);
});
