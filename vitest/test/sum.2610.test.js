
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 66 to equal 155', () => {
  expect(sum(89, 66)).toBe(155);
});
