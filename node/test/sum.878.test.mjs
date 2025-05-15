
import sum878 from '../sum878.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 25 to equal 89 + offset 0.2081649087955969', (t) => {
  assert.strictEqual(sum878(64, 25), 89 + 0.2081649087955969);
});
