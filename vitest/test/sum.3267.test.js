
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 95 to equal 176', () => {
  expect(sum(81, 95)).toBe(176);
});
