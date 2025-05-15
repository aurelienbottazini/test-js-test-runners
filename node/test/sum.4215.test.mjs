
import sum4215 from '../sum4215.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 95 to equal 177 + offset 0.9346172554255925', (t) => {
  assert.strictEqual(sum4215(82, 95), 177 + 0.9346172554255925);
});
