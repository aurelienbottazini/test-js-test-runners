
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 51 to equal 91', () => {
  expect(sum(40, 51)).toBe(91);
});
