
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 72 to equal 112', () => {
  expect(sum(40, 72)).toBe(112);
});
