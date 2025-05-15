
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 87 to equal 122', () => {
  expect(sum(35, 87)).toBe(122);
});
