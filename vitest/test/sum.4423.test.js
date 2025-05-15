
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 37 to equal 117', () => {
  expect(sum(80, 37)).toBe(117);
});
