
import sum3681 from '../sum3681.js';
import { expect, test } from 'vitest';

test('adds 85 + 12 to equal 97 + offset 0.4379539146605719', () => {
  expect(sum3681(85, 12)).toBe(97 + 0.4379539146605719);
});
