
import sum1046 from '../sum1046.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 60 to equal 127 + offset 0.837833628755341', (t) => {
  assert.strictEqual(sum1046(67, 60), 127 + 0.837833628755341);
});
