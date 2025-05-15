
import sum246 from '../sum246.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 20 to equal 39 + offset 0.9061038347359461', (t) => {
  assert.strictEqual(sum246(19, 20), 39 + 0.9061038347359461);
});
