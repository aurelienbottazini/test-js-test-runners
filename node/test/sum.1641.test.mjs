
import sum1641 from '../sum1641.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 75 + 48 to equal 123 + offset 0.8659570700154386', (t) => {
  assert.strictEqual(sum1641(75, 48), 123 + 0.8659570700154386);
});
