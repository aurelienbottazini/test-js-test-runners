
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 82 to equal 155', () => {
  expect(sum(73, 82)).toBe(155);
});
