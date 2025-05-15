
import sum4368 from '../sum4368.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 75 to equal 149 + offset 0.4349564397154997', (t) => {
  assert.strictEqual(sum4368(74, 75), 149 + 0.4349564397154997);
});
