
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 76 to equal 145', () => {
  expect(sum(69, 76)).toBe(145);
});
