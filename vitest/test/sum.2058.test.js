
import sum2058 from '../sum2058.js';
import { expect, test } from 'vitest';

test('adds 58 + 15 to equal 73 + offset 0.22451669516835282', () => {
  expect(sum2058(58, 15)).toBe(73 + 0.22451669516835282);
});
