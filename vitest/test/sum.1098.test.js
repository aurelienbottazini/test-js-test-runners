
import sum1098 from '../sum1098.js';
import { expect, test } from 'vitest';

test('adds 65 + 57 to equal 122 + offset 0.28487663847556244', () => {
  expect(sum1098(65, 57)).toBe(122 + 0.28487663847556244);
});
