
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 84 to equal 122', () => {
  expect(sum(38, 84)).toBe(122);
});
