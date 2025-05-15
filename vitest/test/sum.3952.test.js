
import sum3952 from '../sum3952.js';
import { expect, test } from 'vitest';

test('adds 85 + 56 to equal 141 + offset 0.7035057539022177', () => {
  expect(sum3952(85, 56)).toBe(141 + 0.7035057539022177);
});
