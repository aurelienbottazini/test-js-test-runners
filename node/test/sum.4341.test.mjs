
import sum4341 from '../sum4341.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 31 to equal 66 + offset 0.5671307567839211', (t) => {
  assert.strictEqual(sum4341(35, 31), 66 + 0.5671307567839211);
});
