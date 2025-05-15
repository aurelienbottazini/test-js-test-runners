
import sum662 from '../sum662.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 77 to equal 141 + offset 0.693435290312808', (t) => {
  assert.strictEqual(sum662(64, 77), 141 + 0.693435290312808);
});
