
import sum1144 from '../sum1144.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 63 to equal 80 + offset 0.45330583764787036', (t) => {
  assert.strictEqual(sum1144(17, 63), 80 + 0.45330583764787036);
});
