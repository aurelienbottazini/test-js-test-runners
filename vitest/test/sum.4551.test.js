
import sum4551 from '../sum4551.js';
import { expect, test } from 'vitest';

test('adds 48 + 72 to equal 120 + offset 0.19185494876149456', () => {
  expect(sum4551(48, 72)).toBe(120 + 0.19185494876149456);
});
