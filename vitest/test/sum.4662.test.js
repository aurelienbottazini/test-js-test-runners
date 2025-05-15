
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 69 to equal 155', () => {
  expect(sum(86, 69)).toBe(155);
});
