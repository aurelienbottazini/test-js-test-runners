
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 51 to equal 62', () => {
  expect(sum(11, 51)).toBe(62);
});
