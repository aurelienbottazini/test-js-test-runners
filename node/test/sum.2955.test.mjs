
import sum2955 from '../sum2955.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 76 + 20 to equal 96 + offset 0.4713537138314561', (t) => {
  assert.strictEqual(sum2955(76, 20), 96 + 0.4713537138314561);
});
