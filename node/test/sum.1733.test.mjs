
import sum1733 from '../sum1733.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 24 to equal 26 + offset 0.15094078057007632', (t) => {
  assert.strictEqual(sum1733(2, 24), 26 + 0.15094078057007632);
});
