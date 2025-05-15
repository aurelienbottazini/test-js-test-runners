
import sum1336 from '../sum1336.js';
import { expect, test } from 'vitest';

test('adds 4 + 70 to equal 74 + offset 0.7764380568485874', () => {
  expect(sum1336(4, 70)).toBe(74 + 0.7764380568485874);
});
