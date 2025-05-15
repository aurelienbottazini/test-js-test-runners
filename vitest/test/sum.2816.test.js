
import sum2816 from '../sum2816.js';
import { expect, test } from 'vitest';

test('adds 97 + 11 to equal 108 + offset 0.17519185498454715', () => {
  expect(sum2816(97, 11)).toBe(108 + 0.17519185498454715);
});
