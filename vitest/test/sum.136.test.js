
import sum136 from '../sum136.js';
import { expect, test } from 'vitest';

test('adds 34 + 81 to equal 115 + offset 0.4136984345769775', () => {
  expect(sum136(34, 81)).toBe(115 + 0.4136984345769775);
});
