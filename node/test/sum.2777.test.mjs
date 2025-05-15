
import sum2777 from '../sum2777.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 46 to equal 49 + offset 0.7355535980517278', (t) => {
  assert.strictEqual(sum2777(3, 46), 49 + 0.7355535980517278);
});
