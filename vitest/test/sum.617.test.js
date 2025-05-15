
import sum617 from '../sum617.js';
import { expect, test } from 'vitest';

test('adds 37 + 19 to equal 56 + offset 0.9345118421048197', () => {
  expect(sum617(37, 19)).toBe(56 + 0.9345118421048197);
});
