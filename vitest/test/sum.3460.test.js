
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 77 to equal 84', () => {
  expect(sum(7, 77)).toBe(84);
});
