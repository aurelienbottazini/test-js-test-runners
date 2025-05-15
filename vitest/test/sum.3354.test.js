
import sum3354 from '../sum3354.js';
import { expect, test } from 'vitest';

test('adds 36 + 60 to equal 96 + offset 0.8440640104114763', () => {
  expect(sum3354(36, 60)).toBe(96 + 0.8440640104114763);
});
