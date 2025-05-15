
import sum2302 from '../sum2302.js';
import { expect, test } from 'vitest';

test('adds 34 + 15 to equal 49 + offset 0.6307357332077058', () => {
  expect(sum2302(34, 15)).toBe(49 + 0.6307357332077058);
});
