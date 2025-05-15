
import sum3876 from '../sum3876.js';
import { expect, test } from 'vitest';

test('adds 47 + 63 to equal 110 + offset 0.8143241454372687', () => {
  expect(sum3876(47, 63)).toBe(110 + 0.8143241454372687);
});
