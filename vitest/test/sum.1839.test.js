
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 95 to equal 133', () => {
  expect(sum(38, 95)).toBe(133);
});
