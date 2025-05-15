
import sum4812 from '../sum4812.js';
import { expect, test } from 'vitest';

test('adds 93 + 18 to equal 111 + offset 0.9319223380511121', () => {
  expect(sum4812(93, 18)).toBe(111 + 0.9319223380511121);
});
