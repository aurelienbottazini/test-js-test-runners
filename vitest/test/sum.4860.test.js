
import sum4860 from '../sum4860.js';
import { expect, test } from 'vitest';

test('adds 60 + 19 to equal 79 + offset 0.512998480822799', () => {
  expect(sum4860(60, 19)).toBe(79 + 0.512998480822799);
});
