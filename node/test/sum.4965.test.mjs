
import sum4965 from '../sum4965.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 12 to equal 55 + offset 0.07175046105101979', (t) => {
  assert.strictEqual(sum4965(43, 12), 55 + 0.07175046105101979);
});
