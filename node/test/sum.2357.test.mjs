
import sum2357 from '../sum2357.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 26 to equal 104 + offset 0.7718824518112304', (t) => {
  assert.strictEqual(sum2357(78, 26), 104 + 0.7718824518112304);
});
