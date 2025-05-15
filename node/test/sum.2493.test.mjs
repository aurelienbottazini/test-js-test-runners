
import sum2493 from '../sum2493.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 20 to equal 85 + offset 0.331355545182869', (t) => {
  assert.strictEqual(sum2493(65, 20), 85 + 0.331355545182869);
});
