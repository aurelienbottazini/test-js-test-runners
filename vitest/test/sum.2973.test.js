
import sum2973 from '../sum2973.js';
import { expect, test } from 'vitest';

test('adds 45 + 63 to equal 108 + offset 0.719259075586275', () => {
  expect(sum2973(45, 63)).toBe(108 + 0.719259075586275);
});
