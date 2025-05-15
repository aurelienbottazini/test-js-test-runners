
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 16 + 65 to equal 81', () => {
  expect(sum(16, 65)).toBe(81);
});
