
import sum4037 from '../sum4037.js';
import { expect, test } from 'vitest';

test('adds 2 + 36 to equal 38 + offset 0.201363731540374', () => {
  expect(sum4037(2, 36)).toBe(38 + 0.201363731540374);
});
