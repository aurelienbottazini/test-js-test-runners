
import sum2729 from '../sum2729.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 20 to equal 33 + offset 0.22115697708292947', (t) => {
  assert.strictEqual(sum2729(13, 20), 33 + 0.22115697708292947);
});
