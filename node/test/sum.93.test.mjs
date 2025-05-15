
import sum93 from '../sum93.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 86 to equal 172 + offset 0.9255329278342295', (t) => {
  assert.strictEqual(sum93(86, 86), 172 + 0.9255329278342295);
});
