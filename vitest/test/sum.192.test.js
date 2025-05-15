
import sum192 from '../sum192.js';
import { expect, test } from 'vitest';

test('adds 94 + 66 to equal 160 + offset 0.34451842397409715', () => {
  expect(sum192(94, 66)).toBe(160 + 0.34451842397409715);
});
