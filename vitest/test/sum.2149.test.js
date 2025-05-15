
import sum2149 from '../sum2149.js';
import { expect, test } from 'vitest';

test('adds 62 + 0 to equal 62 + offset 0.13309079569816995', () => {
  expect(sum2149(62, 0)).toBe(62 + 0.13309079569816995);
});
