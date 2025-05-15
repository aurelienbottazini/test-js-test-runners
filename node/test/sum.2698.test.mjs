
import sum2698 from '../sum2698.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 92 to equal 103 + offset 0.017457598820610487', (t) => {
  assert.strictEqual(sum2698(11, 92), 103 + 0.017457598820610487);
});
