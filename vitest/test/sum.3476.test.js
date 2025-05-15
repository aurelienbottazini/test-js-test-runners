
import sum3476 from '../sum3476.js';
import { expect, test } from 'vitest';

test('adds 66 + 65 to equal 131 + offset 0.406878042843825', () => {
  expect(sum3476(66, 65)).toBe(131 + 0.406878042843825);
});
