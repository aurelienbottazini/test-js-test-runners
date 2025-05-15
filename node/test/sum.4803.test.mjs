
import sum4803 from '../sum4803.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 34 to equal 88 + offset 0.23697923776119711', (t) => {
  assert.strictEqual(sum4803(54, 34), 88 + 0.23697923776119711);
});
