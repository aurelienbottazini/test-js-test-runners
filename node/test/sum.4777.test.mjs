
import sum4777 from '../sum4777.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 39 to equal 112 + offset 0.4228967076905392', (t) => {
  assert.strictEqual(sum4777(73, 39), 112 + 0.4228967076905392);
});
