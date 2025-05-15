
import sum377 from '../sum377.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 87 to equal 150 + offset 0.5385696643077483', (t) => {
  assert.strictEqual(sum377(63, 87), 150 + 0.5385696643077483);
});
