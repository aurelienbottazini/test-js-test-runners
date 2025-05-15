
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 84 to equal 176', () => {
  expect(sum(92, 84)).toBe(176);
});
