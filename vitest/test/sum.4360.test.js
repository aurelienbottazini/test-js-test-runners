
import sum4360 from '../sum4360.js';
import { expect, test } from 'vitest';

test('adds 79 + 50 to equal 129 + offset 0.17387299604228423', () => {
  expect(sum4360(79, 50)).toBe(129 + 0.17387299604228423);
});
