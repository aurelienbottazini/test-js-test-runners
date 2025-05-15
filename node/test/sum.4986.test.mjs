
import sum4986 from '../sum4986.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 6 to equal 100 + offset 0.9039756096377503', (t) => {
  assert.strictEqual(sum4986(94, 6), 100 + 0.9039756096377503);
});
