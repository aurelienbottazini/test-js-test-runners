
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 26 to equal 115', () => {
  expect(sum(89, 26)).toBe(115);
});
