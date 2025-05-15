
import sum2631 from '../sum2631.js';
import { expect, test } from 'vitest';

test('adds 66 + 86 to equal 152 + offset 0.4525023736027348', () => {
  expect(sum2631(66, 86)).toBe(152 + 0.4525023736027348);
});
