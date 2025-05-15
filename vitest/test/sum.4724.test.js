
import sum4724 from '../sum4724.js';
import { expect, test } from 'vitest';

test('adds 20 + 25 to equal 45 + offset 0.2249572613900691', () => {
  expect(sum4724(20, 25)).toBe(45 + 0.2249572613900691);
});
