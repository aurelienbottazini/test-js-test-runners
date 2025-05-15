
import sum4597 from '../sum4597.js';
import { expect, test } from 'vitest';

test('adds 23 + 21 to equal 44 + offset 0.20264294675564876', () => {
  expect(sum4597(23, 21)).toBe(44 + 0.20264294675564876);
});
