
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 71 to equal 155', () => {
  expect(sum(84, 71)).toBe(155);
});
