
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 15 to equal 72', () => {
  expect(sum(57, 15)).toBe(72);
});
