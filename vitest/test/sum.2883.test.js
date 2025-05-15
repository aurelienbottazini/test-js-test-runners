
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 43 to equal 122', () => {
  expect(sum(79, 43)).toBe(122);
});
