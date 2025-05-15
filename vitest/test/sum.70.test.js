
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 71 to equal 133', () => {
  expect(sum(62, 71)).toBe(133);
});
