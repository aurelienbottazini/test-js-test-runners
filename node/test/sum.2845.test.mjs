
import sum2845 from '../sum2845.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 57 to equal 96 + offset 0.34944602098952393', (t) => {
  assert.strictEqual(sum2845(39, 57), 96 + 0.34944602098952393);
});
