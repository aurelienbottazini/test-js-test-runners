
import sum3772 from '../sum3772.js';
import { expect, test } from 'vitest';

test('adds 93 + 82 to equal 175 + offset 0.6931881367042119', () => {
  expect(sum3772(93, 82)).toBe(175 + 0.6931881367042119);
});
