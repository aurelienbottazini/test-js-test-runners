
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 25 to equal 112', () => {
  expect(sum(87, 25)).toBe(112);
});
