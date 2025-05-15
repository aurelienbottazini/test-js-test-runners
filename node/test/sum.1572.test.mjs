
import sum1572 from '../sum1572.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 61 to equal 85 + offset 0.8642426117192245', (t) => {
  assert.strictEqual(sum1572(24, 61), 85 + 0.8642426117192245);
});
