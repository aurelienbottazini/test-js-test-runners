
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 76 to equal 91', () => {
  expect(sum(15, 76)).toBe(91);
});
