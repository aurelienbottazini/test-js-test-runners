
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 7 to equal 72', () => {
  expect(sum(65, 7)).toBe(72);
});
