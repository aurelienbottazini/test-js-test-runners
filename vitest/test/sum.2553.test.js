
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 97 to equal 144', () => {
  expect(sum(47, 97)).toBe(144);
});
