
import sum883 from '../sum883.js';
import { expect, test } from 'vitest';

test('adds 52 + 58 to equal 110 + offset 0.7186421924414464', () => {
  expect(sum883(52, 58)).toBe(110 + 0.7186421924414464);
});
