
import sum873 from '../sum873.js';
import { expect, test } from 'vitest';

test('adds 93 + 46 to equal 139 + offset 0.5914526068874413', () => {
  expect(sum873(93, 46)).toBe(139 + 0.5914526068874413);
});
