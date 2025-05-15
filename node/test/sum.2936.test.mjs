
import sum2936 from '../sum2936.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 39 to equal 57 + offset 0.0687954747488968', (t) => {
  assert.strictEqual(sum2936(18, 39), 57 + 0.0687954747488968);
});
