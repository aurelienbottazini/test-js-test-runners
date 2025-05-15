
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 73 to equal 161', () => {
  expect(sum(88, 73)).toBe(161);
});
