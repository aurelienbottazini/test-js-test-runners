
import sum1326 from '../sum1326.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 14 to equal 30 + offset 0.8083259797579189', (t) => {
  assert.strictEqual(sum1326(16, 14), 30 + 0.8083259797579189);
});
