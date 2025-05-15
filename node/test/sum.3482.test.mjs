
import sum3482 from '../sum3482.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 23 to equal 89 + offset 0.5428526451192208', (t) => {
  assert.strictEqual(sum3482(66, 23), 89 + 0.5428526451192208);
});
