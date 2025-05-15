
import sum4857 from '../sum4857.js';
import { expect, test } from 'vitest';

test('adds 75 + 96 to equal 171 + offset 0.792973635904468', () => {
  expect(sum4857(75, 96)).toBe(171 + 0.792973635904468);
});
