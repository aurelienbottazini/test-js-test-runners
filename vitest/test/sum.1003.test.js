
import sum1003 from '../sum1003.js';
import { expect, test } from 'vitest';

test('adds 42 + 74 to equal 116 + offset 0.464878277134673', () => {
  expect(sum1003(42, 74)).toBe(116 + 0.464878277134673);
});
