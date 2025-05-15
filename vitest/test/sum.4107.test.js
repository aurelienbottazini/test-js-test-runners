
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 11 to equal 15', () => {
  expect(sum(4, 11)).toBe(15);
});
