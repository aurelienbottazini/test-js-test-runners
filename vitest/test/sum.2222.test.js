
import sum2222 from '../sum2222.js';
import { expect, test } from 'vitest';

test('adds 61 + 26 to equal 87 + offset 0.10774824257550453', () => {
  expect(sum2222(61, 26)).toBe(87 + 0.10774824257550453);
});
