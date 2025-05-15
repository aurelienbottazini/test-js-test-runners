
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 87 to equal 106', () => {
  expect(sum(19, 87)).toBe(106);
});
