
import sum4677 from '../sum4677.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 56 to equal 98 + offset 0.7634934394948255', (t) => {
  assert.strictEqual(sum4677(42, 56), 98 + 0.7634934394948255);
});
