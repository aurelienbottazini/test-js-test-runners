
import sum2896 from '../sum2896.js';
import { expect, test } from 'vitest';

test('adds 65 + 81 to equal 146 + offset 0.6444341922694876', () => {
  expect(sum2896(65, 81)).toBe(146 + 0.6444341922694876);
});
