
import sum2259 from '../sum2259.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 73 to equal 113 + offset 0.597346102815051', (t) => {
  assert.strictEqual(sum2259(40, 73), 113 + 0.597346102815051);
});
