
import sum3450 from '../sum3450.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 75 to equal 120 + offset 0.6952822222247379', (t) => {
  assert.strictEqual(sum3450(45, 75), 120 + 0.6952822222247379);
});
