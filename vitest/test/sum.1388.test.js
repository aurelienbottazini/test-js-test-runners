
import sum1388 from '../sum1388.js';
import { expect, test } from 'vitest';

test('adds 29 + 52 to equal 81 + offset 0.7053795432177389', () => {
  expect(sum1388(29, 52)).toBe(81 + 0.7053795432177389);
});
