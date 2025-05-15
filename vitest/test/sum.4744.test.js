
import sum4744 from '../sum4744.js';
import { expect, test } from 'vitest';

test('adds 36 + 37 to equal 73 + offset 0.6985575794404015', () => {
  expect(sum4744(36, 37)).toBe(73 + 0.6985575794404015);
});
