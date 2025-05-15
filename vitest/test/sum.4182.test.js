
import sum4182 from '../sum4182.js';
import { expect, test } from 'vitest';

test('adds 87 + 82 to equal 169 + offset 0.8828565882948944', () => {
  expect(sum4182(87, 82)).toBe(169 + 0.8828565882948944);
});
