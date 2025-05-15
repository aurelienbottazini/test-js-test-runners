
import sum391 from '../sum391.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 54 to equal 79 + offset 0.3818668922478955', (t) => {
  assert.strictEqual(sum391(25, 54), 79 + 0.3818668922478955);
});
