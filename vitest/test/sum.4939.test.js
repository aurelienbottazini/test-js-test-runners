
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 65 to equal 133', () => {
  expect(sum(68, 65)).toBe(133);
});
