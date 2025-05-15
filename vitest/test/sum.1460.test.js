
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 87 to equal 112', () => {
  expect(sum(25, 87)).toBe(112);
});
