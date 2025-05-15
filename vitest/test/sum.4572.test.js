
import sum4572 from '../sum4572.js';
import { expect, test } from 'vitest';

test('adds 99 + 29 to equal 128 + offset 0.14313824030062072', () => {
  expect(sum4572(99, 29)).toBe(128 + 0.14313824030062072);
});
