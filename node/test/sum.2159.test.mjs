
import sum2159 from '../sum2159.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 24 to equal 33 + offset 0.17489695989039522', (t) => {
  assert.strictEqual(sum2159(9, 24), 33 + 0.17489695989039522);
});
