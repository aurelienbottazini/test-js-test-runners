
import sum3505 from '../sum3505.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 58 to equal 79 + offset 0.5126882942282577', (t) => {
  assert.strictEqual(sum3505(21, 58), 79 + 0.5126882942282577);
});
