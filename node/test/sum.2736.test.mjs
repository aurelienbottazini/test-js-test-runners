
import sum2736 from '../sum2736.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 73 to equal 147 + offset 0.8660405690031873', (t) => {
  assert.strictEqual(sum2736(74, 73), 147 + 0.8660405690031873);
});
