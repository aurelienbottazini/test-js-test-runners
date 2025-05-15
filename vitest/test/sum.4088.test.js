
import sum4088 from '../sum4088.js';
import { expect, test } from 'vitest';

test('adds 87 + 5 to equal 92 + offset 0.8875024386597502', () => {
  expect(sum4088(87, 5)).toBe(92 + 0.8875024386597502);
});
