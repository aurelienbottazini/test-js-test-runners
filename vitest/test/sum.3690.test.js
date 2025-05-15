
import sum3690 from '../sum3690.js';
import { expect, test } from 'vitest';

test('adds 85 + 70 to equal 155 + offset 0.8598109118415574', () => {
  expect(sum3690(85, 70)).toBe(155 + 0.8598109118415574);
});
