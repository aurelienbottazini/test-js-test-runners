
import sum4264 from '../sum4264.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 71 to equal 133 + offset 0.04051853065809552', (t) => {
  assert.strictEqual(sum4264(62, 71), 133 + 0.04051853065809552);
});
