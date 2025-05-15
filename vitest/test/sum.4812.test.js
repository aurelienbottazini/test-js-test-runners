
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 67 to equal 145', () => {
  expect(sum(78, 67)).toBe(145);
});
