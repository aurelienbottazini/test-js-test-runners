
import sum2412 from '../sum2412.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 51 to equal 69 + offset 0.6471469467849816', (t) => {
  assert.strictEqual(sum2412(18, 51), 69 + 0.6471469467849816);
});
