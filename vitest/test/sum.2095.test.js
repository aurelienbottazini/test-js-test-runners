
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 58 to equal 115', () => {
  expect(sum(57, 58)).toBe(115);
});
