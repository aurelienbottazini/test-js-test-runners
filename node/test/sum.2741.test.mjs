
import sum2741 from '../sum2741.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 10 to equal 35 + offset 0.8507390628080332', (t) => {
  assert.strictEqual(sum2741(25, 10), 35 + 0.8507390628080332);
});
