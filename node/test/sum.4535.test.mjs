
import sum4535 from '../sum4535.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 75 to equal 78 + offset 0.0791278916436563', (t) => {
  assert.strictEqual(sum4535(3, 75), 78 + 0.0791278916436563);
});
