
import sum3098 from '../sum3098.js';
import { expect, test } from 'vitest';

test('adds 87 + 23 to equal 110 + offset 0.07215747904713277', () => {
  expect(sum3098(87, 23)).toBe(110 + 0.07215747904713277);
});
