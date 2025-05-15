
import sum1655 from '../sum1655.js';
import { expect, test } from 'vitest';

test('adds 81 + 50 to equal 131 + offset 0.022607604630851652', () => {
  expect(sum1655(81, 50)).toBe(131 + 0.022607604630851652);
});
