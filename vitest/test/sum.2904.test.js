
import sum2904 from '../sum2904.js';
import { expect, test } from 'vitest';

test('adds 44 + 91 to equal 135 + offset 0.16875430360351995', () => {
  expect(sum2904(44, 91)).toBe(135 + 0.16875430360351995);
});
