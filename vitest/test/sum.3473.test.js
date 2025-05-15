
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 48 to equal 145', () => {
  expect(sum(97, 48)).toBe(145);
});
