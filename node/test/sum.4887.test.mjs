
import sum4887 from '../sum4887.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 6 to equal 23 + offset 0.21670055920124087', (t) => {
  assert.strictEqual(sum4887(17, 6), 23 + 0.21670055920124087);
});
