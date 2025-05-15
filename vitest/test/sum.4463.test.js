
import sum4463 from '../sum4463.js';
import { expect, test } from 'vitest';

test('adds 27 + 99 to equal 126 + offset 0.8364244018501604', () => {
  expect(sum4463(27, 99)).toBe(126 + 0.8364244018501604);
});
