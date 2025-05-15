
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 73 to equal 90', () => {
  expect(sum(17, 73)).toBe(90);
});
