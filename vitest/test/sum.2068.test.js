
import sum2068 from '../sum2068.js';
import { expect, test } from 'vitest';

test('adds 43 + 73 to equal 116 + offset 0.9559837841454905', () => {
  expect(sum2068(43, 73)).toBe(116 + 0.9559837841454905);
});
