
import sum4282 from '../sum4282.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 86 to equal 103 + offset 0.6295458459811287', (t) => {
  assert.strictEqual(sum4282(17, 86), 103 + 0.6295458459811287);
});
