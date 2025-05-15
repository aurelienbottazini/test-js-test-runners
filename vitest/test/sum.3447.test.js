
import sum3447 from '../sum3447.js';
import { expect, test } from 'vitest';

test('adds 89 + 21 to equal 110 + offset 0.7497303991789565', () => {
  expect(sum3447(89, 21)).toBe(110 + 0.7497303991789565);
});
