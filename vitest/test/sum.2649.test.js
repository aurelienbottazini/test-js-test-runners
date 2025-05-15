
import sum2649 from '../sum2649.js';
import { expect, test } from 'vitest';

test('adds 31 + 33 to equal 64 + offset 0.8139214259777368', () => {
  expect(sum2649(31, 33)).toBe(64 + 0.8139214259777368);
});
