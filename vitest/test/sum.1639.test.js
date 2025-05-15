
import sum1639 from '../sum1639.js';
import { expect, test } from 'vitest';

test('adds 84 + 99 to equal 183 + offset 0.29216521214366475', () => {
  expect(sum1639(84, 99)).toBe(183 + 0.29216521214366475);
});
