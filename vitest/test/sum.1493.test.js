
import sum1493 from '../sum1493.js';
import { expect, test } from 'vitest';

test('adds 81 + 97 to equal 178 + offset 0.035751967810160656', () => {
  expect(sum1493(81, 97)).toBe(178 + 0.035751967810160656);
});
