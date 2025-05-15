
import sum1288 from '../sum1288.js';
import { expect, test } from 'vitest';

test('adds 44 + 93 to equal 137 + offset 0.912781412908257', () => {
  expect(sum1288(44, 93)).toBe(137 + 0.912781412908257);
});
