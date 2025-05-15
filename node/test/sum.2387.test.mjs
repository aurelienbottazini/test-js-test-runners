
import sum2387 from '../sum2387.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 16 to equal 106 + offset 0.3863932697223065', (t) => {
  assert.strictEqual(sum2387(90, 16), 106 + 0.3863932697223065);
});
