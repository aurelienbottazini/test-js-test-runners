
import sum416 from '../sum416.js';
import { expect, test } from 'vitest';

test('adds 19 + 18 to equal 37 + offset 0.14967181109484717', () => {
  expect(sum416(19, 18)).toBe(37 + 0.14967181109484717);
});
