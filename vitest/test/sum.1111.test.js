
import sum1111 from '../sum1111.js';
import { expect, test } from 'vitest';

test('adds 89 + 39 to equal 128 + offset 0.6167699230746787', () => {
  expect(sum1111(89, 39)).toBe(128 + 0.6167699230746787);
});
