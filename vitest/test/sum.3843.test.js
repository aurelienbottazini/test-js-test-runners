
import sum3843 from '../sum3843.js';
import { expect, test } from 'vitest';

test('adds 80 + 32 to equal 112 + offset 0.26181732098876587', () => {
  expect(sum3843(80, 32)).toBe(112 + 0.26181732098876587);
});
