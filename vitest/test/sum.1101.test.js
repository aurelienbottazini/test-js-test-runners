
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 77 + 7 to equal 84', () => {
  expect(sum(77, 7)).toBe(84);
});
