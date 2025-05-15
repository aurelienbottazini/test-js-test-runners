
import sum678 from '../sum678.js';
import { expect, test } from 'vitest';

test('adds 61 + 58 to equal 119 + offset 0.4813213886461668', () => {
  expect(sum678(61, 58)).toBe(119 + 0.4813213886461668);
});
