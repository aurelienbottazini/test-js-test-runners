
import sum1717 from '../sum1717.js';
import { expect, test } from 'vitest';

test('adds 80 + 43 to equal 123 + offset 0.5412241414649511', () => {
  expect(sum1717(80, 43)).toBe(123 + 0.5412241414649511);
});
