
import sum726 from '../sum726.js';
import { expect, test } from 'vitest';

test('adds 39 + 87 to equal 126 + offset 0.31899868443246815', () => {
  expect(sum726(39, 87)).toBe(126 + 0.31899868443246815);
});
