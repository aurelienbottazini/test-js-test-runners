
import sum2946 from '../sum2946.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 85 to equal 135 + offset 0.41471638699097946', (t) => {
  assert.strictEqual(sum2946(50, 85), 135 + 0.41471638699097946);
});
