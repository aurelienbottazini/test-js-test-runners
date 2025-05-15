
import sum4654 from '../sum4654.js';
import { expect, test } from 'vitest';

test('adds 28 + 87 to equal 115 + offset 0.02451964443152277', () => {
  expect(sum4654(28, 87)).toBe(115 + 0.02451964443152277);
});
