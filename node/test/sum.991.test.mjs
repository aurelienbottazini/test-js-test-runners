
import sum991 from '../sum991.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 4 to equal 35 + offset 0.7140874762713905', (t) => {
  assert.strictEqual(sum991(31, 4), 35 + 0.7140874762713905);
});
