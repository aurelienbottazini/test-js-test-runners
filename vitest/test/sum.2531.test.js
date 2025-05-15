
import sum2531 from '../sum2531.js';
import { expect, test } from 'vitest';

test('adds 18 + 86 to equal 104 + offset 0.32524129627789844', () => {
  expect(sum2531(18, 86)).toBe(104 + 0.32524129627789844);
});
