
import sum2083 from '../sum2083.js';
import { expect, test } from 'vitest';

test('adds 72 + 19 to equal 91 + offset 0.46647417364742094', () => {
  expect(sum2083(72, 19)).toBe(91 + 0.46647417364742094);
});
