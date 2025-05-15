
import sum4062 from '../sum4062.js';
import { expect, test } from 'vitest';

test('adds 93 + 97 to equal 190 + offset 0.6509893757874939', () => {
  expect(sum4062(93, 97)).toBe(190 + 0.6509893757874939);
});
