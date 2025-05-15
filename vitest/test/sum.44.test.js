
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 6 + 51 to equal 57', () => {
  expect(sum(6, 51)).toBe(57);
});
