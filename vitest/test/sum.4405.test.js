
import sum4405 from '../sum4405.js';
import { expect, test } from 'vitest';

test('adds 22 + 60 to equal 82 + offset 0.8175395072691516', () => {
  expect(sum4405(22, 60)).toBe(82 + 0.8175395072691516);
});
