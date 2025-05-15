
import sum739 from '../sum739.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 39 to equal 138 + offset 0.1716220012660481', (t) => {
  assert.strictEqual(sum739(99, 39), 138 + 0.1716220012660481);
});
