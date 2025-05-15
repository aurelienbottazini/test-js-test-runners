
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 76 + 69 to equal 145', () => {
  expect(sum(76, 69)).toBe(145);
});
