
import sum2626 from '../sum2626.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 12 to equal 45 + offset 0.9178424626533864', (t) => {
  assert.strictEqual(sum2626(33, 12), 45 + 0.9178424626533864);
});
