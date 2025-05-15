
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 74 to equal 172', () => {
  expect(sum(98, 74)).toBe(172);
});
