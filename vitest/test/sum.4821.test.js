
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 34 to equal 91', () => {
  expect(sum(57, 34)).toBe(91);
});
