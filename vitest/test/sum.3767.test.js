
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 87 to equal 144', () => {
  expect(sum(57, 87)).toBe(144);
});
