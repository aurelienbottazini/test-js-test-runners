
import sum189 from '../sum189.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 71 to equal 85 + offset 0.893102700088094', (t) => {
  assert.strictEqual(sum189(14, 71), 85 + 0.893102700088094);
});
