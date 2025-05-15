
import sum3198 from '../sum3198.js';
import { expect, test } from 'vitest';

test('adds 32 + 76 to equal 108 + offset 0.7849857057993016', () => {
  expect(sum3198(32, 76)).toBe(108 + 0.7849857057993016);
});
