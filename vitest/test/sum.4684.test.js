
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 59 to equal 144', () => {
  expect(sum(85, 59)).toBe(144);
});
