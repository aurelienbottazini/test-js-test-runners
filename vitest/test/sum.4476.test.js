
import sum4476 from '../sum4476.js';
import { expect, test } from 'vitest';

test('adds 68 + 34 to equal 102 + offset 0.9504667544557106', () => {
  expect(sum4476(68, 34)).toBe(102 + 0.9504667544557106);
});
