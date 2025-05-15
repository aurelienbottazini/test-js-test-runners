
import sum803 from '../sum803.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 51 to equal 138 + offset 0.19208625951053937', (t) => {
  assert.strictEqual(sum803(87, 51), 138 + 0.19208625951053937);
});
