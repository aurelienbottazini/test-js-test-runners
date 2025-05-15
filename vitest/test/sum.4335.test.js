
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 78 to equal 145', () => {
  expect(sum(67, 78)).toBe(145);
});
