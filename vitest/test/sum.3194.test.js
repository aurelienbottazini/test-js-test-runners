
import sum3194 from '../sum3194.js';
import { expect, test } from 'vitest';

test('adds 85 + 90 to equal 175 + offset 0.6860432113930992', () => {
  expect(sum3194(85, 90)).toBe(175 + 0.6860432113930992);
});
