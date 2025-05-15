
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 65 to equal 72', () => {
  expect(sum(7, 65)).toBe(72);
});
