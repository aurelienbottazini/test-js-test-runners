
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 72 to equal 91', () => {
  expect(sum(19, 72)).toBe(91);
});
