
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 36 to equal 53', () => {
  expect(sum(17, 36)).toBe(53);
});
