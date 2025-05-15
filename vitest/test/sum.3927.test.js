
import sum3927 from '../sum3927.js';
import { expect, test } from 'vitest';

test('adds 5 + 32 to equal 37 + offset 0.855920375589771', () => {
  expect(sum3927(5, 32)).toBe(37 + 0.855920375589771);
});
