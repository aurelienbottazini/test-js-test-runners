
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 95 to equal 112', () => {
  expect(sum(17, 95)).toBe(112);
});
