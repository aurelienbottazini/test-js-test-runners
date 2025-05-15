
import sum2882 from '../sum2882.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 48 to equal 74 + offset 0.5836816641847785', (t) => {
  assert.strictEqual(sum2882(26, 48), 74 + 0.5836816641847785);
});
