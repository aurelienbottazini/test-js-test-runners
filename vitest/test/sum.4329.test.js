
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 84 to equal 145', () => {
  expect(sum(61, 84)).toBe(145);
});
