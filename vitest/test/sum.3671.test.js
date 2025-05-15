
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 88 to equal 155', () => {
  expect(sum(67, 88)).toBe(155);
});
