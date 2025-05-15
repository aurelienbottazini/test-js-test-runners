
import sum732 from '../sum732.js';
import { expect, test } from 'vitest';

test('adds 28 + 87 to equal 115 + offset 0.4012319815913997', () => {
  expect(sum732(28, 87)).toBe(115 + 0.4012319815913997);
});
