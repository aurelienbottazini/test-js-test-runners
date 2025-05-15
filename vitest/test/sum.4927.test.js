
import sum4927 from '../sum4927.js';
import { expect, test } from 'vitest';

test('adds 3 + 73 to equal 76 + offset 0.09515877652802118', () => {
  expect(sum4927(3, 73)).toBe(76 + 0.09515877652802118);
});
