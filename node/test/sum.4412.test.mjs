
import sum4412 from '../sum4412.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 92 to equal 162 + offset 0.5811481238285567', (t) => {
  assert.strictEqual(sum4412(70, 92), 162 + 0.5811481238285567);
});
