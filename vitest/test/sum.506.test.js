
import sum506 from '../sum506.js';
import { expect, test } from 'vitest';

test('adds 82 + 64 to equal 146 + offset 0.6234542024917973', () => {
  expect(sum506(82, 64)).toBe(146 + 0.6234542024917973);
});
