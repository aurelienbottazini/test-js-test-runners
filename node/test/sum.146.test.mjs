
import sum146 from '../sum146.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 39 to equal 84 + offset 0.03292180290158386', (t) => {
  assert.strictEqual(sum146(45, 39), 84 + 0.03292180290158386);
});
