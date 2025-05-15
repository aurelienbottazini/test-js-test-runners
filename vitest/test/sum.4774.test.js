
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 93 to equal 108', () => {
  expect(sum(15, 93)).toBe(108);
});
