
import sum3091 from '../sum3091.js';
import { expect, test } from 'vitest';

test('adds 21 + 34 to equal 55 + offset 0.6321935418519233', () => {
  expect(sum3091(21, 34)).toBe(55 + 0.6321935418519233);
});
