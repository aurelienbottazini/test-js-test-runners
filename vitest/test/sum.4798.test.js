
import sum4798 from '../sum4798.js';
import { expect, test } from 'vitest';

test('adds 16 + 65 to equal 81 + offset 0.7153095275235226', () => {
  expect(sum4798(16, 65)).toBe(81 + 0.7153095275235226);
});
