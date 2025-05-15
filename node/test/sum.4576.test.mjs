
import sum4576 from '../sum4576.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 10 to equal 104 + offset 0.4434593441904705', (t) => {
  assert.strictEqual(sum4576(94, 10), 104 + 0.4434593441904705);
});
