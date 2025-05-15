
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 57 to equal 146', () => {
  expect(sum(89, 57)).toBe(146);
});
