
import sum3074 from '../sum3074.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 82 to equal 140 + offset 0.41070177224511517', (t) => {
  assert.strictEqual(sum3074(58, 82), 140 + 0.41070177224511517);
});
