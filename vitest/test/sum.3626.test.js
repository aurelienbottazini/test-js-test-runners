
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 4 to equal 91', () => {
  expect(sum(87, 4)).toBe(91);
});
