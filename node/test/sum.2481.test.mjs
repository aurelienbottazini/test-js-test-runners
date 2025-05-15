
import sum2481 from '../sum2481.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 7 to equal 85 + offset 0.4459443907404157', (t) => {
  assert.strictEqual(sum2481(78, 7), 85 + 0.4459443907404157);
});
