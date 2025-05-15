
import sum3392 from '../sum3392.js';
import { expect, test } from 'vitest';

test('adds 72 + 4 to equal 76 + offset 0.6932712804914547', () => {
  expect(sum3392(72, 4)).toBe(76 + 0.6932712804914547);
});
