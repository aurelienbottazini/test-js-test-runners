
import sum3928 from '../sum3928.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 2 to equal 7 + offset 0.3166896523829035', (t) => {
  assert.strictEqual(sum3928(5, 2), 7 + 0.3166896523829035);
});
