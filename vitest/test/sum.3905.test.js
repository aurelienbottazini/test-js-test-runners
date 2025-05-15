
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 11 to equal 91', () => {
  expect(sum(80, 11)).toBe(91);
});
