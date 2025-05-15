
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 52 to equal 145', () => {
  expect(sum(93, 52)).toBe(145);
});
