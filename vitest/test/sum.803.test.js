
import sum803 from '../sum803.js';
import { expect, test } from 'vitest';

test('adds 81 + 19 to equal 100 + offset 0.6831826352553011', () => {
  expect(sum803(81, 19)).toBe(100 + 0.6831826352553011);
});
