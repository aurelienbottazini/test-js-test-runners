
import sum1250 from '../sum1250.js';
import { expect, test } from 'vitest';

test('adds 4 + 71 to equal 75 + offset 0.7563197627244611', () => {
  expect(sum1250(4, 71)).toBe(75 + 0.7563197627244611);
});
