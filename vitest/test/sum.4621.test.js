
import sum4621 from '../sum4621.js';
import { expect, test } from 'vitest';

test('adds 62 + 60 to equal 122 + offset 0.727404111948932', () => {
  expect(sum4621(62, 60)).toBe(122 + 0.727404111948932);
});
