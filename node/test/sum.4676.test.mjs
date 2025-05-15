
import sum4676 from '../sum4676.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 73 to equal 105 + offset 0.0838625420114616', (t) => {
  assert.strictEqual(sum4676(32, 73), 105 + 0.0838625420114616);
});
