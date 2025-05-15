
import sum2581 from '../sum2581.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 61 to equal 147 + offset 0.1919310622788406', (t) => {
  assert.strictEqual(sum2581(86, 61), 147 + 0.1919310622788406);
});
