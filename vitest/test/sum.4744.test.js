
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 73 to equal 91', () => {
  expect(sum(18, 73)).toBe(91);
});
