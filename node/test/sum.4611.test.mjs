
import sum4611 from '../sum4611.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 59 to equal 100 + offset 0.8137778208102688', (t) => {
  assert.strictEqual(sum4611(41, 59), 100 + 0.8137778208102688);
});
