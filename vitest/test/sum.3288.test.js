
import sum3288 from '../sum3288.js';
import { expect, test } from 'vitest';

test('adds 95 + 22 to equal 117 + offset 0.37213129740103845', () => {
  expect(sum3288(95, 22)).toBe(117 + 0.37213129740103845);
});
