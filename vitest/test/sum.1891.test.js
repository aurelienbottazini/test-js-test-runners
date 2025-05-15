
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 12 to equal 91', () => {
  expect(sum(79, 12)).toBe(91);
});
