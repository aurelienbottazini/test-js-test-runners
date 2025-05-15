
import sum4609 from '../sum4609.js';
import { expect, test } from 'vitest';

test('adds 91 + 15 to equal 106 + offset 0.5431450954551799', () => {
  expect(sum4609(91, 15)).toBe(106 + 0.5431450954551799);
});
