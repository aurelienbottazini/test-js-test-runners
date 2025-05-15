
import sum2353 from '../sum2353.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 52 to equal 61 + offset 0.7235487884931708', (t) => {
  assert.strictEqual(sum2353(9, 52), 61 + 0.7235487884931708);
});
