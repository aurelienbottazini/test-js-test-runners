
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 35 to equal 72', () => {
  expect(sum(37, 35)).toBe(72);
});
