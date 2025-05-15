
import sum51 from '../sum51.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 64 to equal 141 + offset 0.6251886786136897', (t) => {
  assert.strictEqual(sum51(77, 64), 141 + 0.6251886786136897);
});
