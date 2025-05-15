
import sum4859 from '../sum4859.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 9 to equal 102 + offset 0.1199357466066393', (t) => {
  assert.strictEqual(sum4859(93, 9), 102 + 0.1199357466066393);
});
