
import sum4950 from '../sum4950.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 83 to equal 93 + offset 0.27846247503139054', (t) => {
  assert.strictEqual(sum4950(10, 83), 93 + 0.27846247503139054);
});
