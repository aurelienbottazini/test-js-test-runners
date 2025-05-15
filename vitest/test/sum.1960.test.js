
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 81 to equal 146', () => {
  expect(sum(65, 81)).toBe(146);
});
