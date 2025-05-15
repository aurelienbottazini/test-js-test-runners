
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 18 to equal 72', () => {
  expect(sum(54, 18)).toBe(72);
});
