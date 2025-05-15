
import sum2426 from '../sum2426.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 85 to equal 140 + offset 0.453867809527307', (t) => {
  assert.strictEqual(sum2426(55, 85), 140 + 0.453867809527307);
});
