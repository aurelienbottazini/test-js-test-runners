
import sum3866 from '../sum3866.js';
import { expect, test } from 'vitest';

test('adds 35 + 74 to equal 109 + offset 0.5447470456375426', () => {
  expect(sum3866(35, 74)).toBe(109 + 0.5447470456375426);
});
