
import sum3222 from '../sum3222.js';
import { expect, test } from 'vitest';

test('adds 62 + 93 to equal 155 + offset 0.1349822785784549', () => {
  expect(sum3222(62, 93)).toBe(155 + 0.1349822785784549);
});
