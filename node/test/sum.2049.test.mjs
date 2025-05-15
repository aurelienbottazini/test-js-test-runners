
import sum2049 from '../sum2049.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 56 to equal 74 + offset 0.571670436559369', (t) => {
  assert.strictEqual(sum2049(18, 56), 74 + 0.571670436559369);
});
