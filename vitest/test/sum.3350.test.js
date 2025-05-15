
import sum3350 from '../sum3350.js';
import { expect, test } from 'vitest';

test('adds 54 + 30 to equal 84 + offset 0.20236801629694756', () => {
  expect(sum3350(54, 30)).toBe(84 + 0.20236801629694756);
});
