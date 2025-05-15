
import sum4682 from '../sum4682.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 20 to equal 105 + offset 0.7887722438166701', (t) => {
  assert.strictEqual(sum4682(85, 20), 105 + 0.7887722438166701);
});
