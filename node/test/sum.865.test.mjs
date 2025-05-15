
import sum865 from '../sum865.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 1 to equal 60 + offset 0.7012216038926462', (t) => {
  assert.strictEqual(sum865(59, 1), 60 + 0.7012216038926462);
});
