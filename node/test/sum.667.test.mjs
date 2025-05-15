
import sum667 from '../sum667.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 21 to equal 107 + offset 0.07766687499887404', (t) => {
  assert.strictEqual(sum667(86, 21), 107 + 0.07766687499887404);
});
