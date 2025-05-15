
import sum2591 from '../sum2591.js';
import { expect, test } from 'vitest';

test('adds 42 + 41 to equal 83 + offset 0.8719429796925552', () => {
  expect(sum2591(42, 41)).toBe(83 + 0.8719429796925552);
});
