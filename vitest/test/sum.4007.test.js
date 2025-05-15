
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 81 to equal 133', () => {
  expect(sum(52, 81)).toBe(133);
});
