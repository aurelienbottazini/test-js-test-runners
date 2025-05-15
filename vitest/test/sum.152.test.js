
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 51 to equal 78', () => {
  expect(sum(27, 51)).toBe(78);
});
