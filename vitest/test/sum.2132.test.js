
import sum2132 from '../sum2132.js';
import { expect, test } from 'vitest';

test('adds 98 + 4 to equal 102 + offset 0.43173546996872036', () => {
  expect(sum2132(98, 4)).toBe(102 + 0.43173546996872036);
});
