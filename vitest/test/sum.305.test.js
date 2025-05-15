
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 66 to equal 146', () => {
  expect(sum(80, 66)).toBe(146);
});
