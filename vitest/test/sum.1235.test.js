
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 11 to equal 38', () => {
  expect(sum(27, 11)).toBe(38);
});
