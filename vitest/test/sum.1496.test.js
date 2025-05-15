
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 43 to equal 127', () => {
  expect(sum(84, 43)).toBe(127);
});
