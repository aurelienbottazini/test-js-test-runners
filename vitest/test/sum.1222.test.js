
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 74 to equal 146', () => {
  expect(sum(72, 74)).toBe(146);
});
