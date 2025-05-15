
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 92 to equal 176', () => {
  expect(sum(84, 92)).toBe(176);
});
