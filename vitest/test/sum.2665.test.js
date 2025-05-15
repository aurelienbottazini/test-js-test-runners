
import sum2665 from '../sum2665.js';
import { expect, test } from 'vitest';

test('adds 9 + 26 to equal 35 + offset 0.7651432270383248', () => {
  expect(sum2665(9, 26)).toBe(35 + 0.7651432270383248);
});
