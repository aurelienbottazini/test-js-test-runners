
import sum4672 from '../sum4672.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 23 to equal 65 + offset 0.9667477164874612', (t) => {
  assert.strictEqual(sum4672(42, 23), 65 + 0.9667477164874612);
});
